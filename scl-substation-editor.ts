/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html, TemplateResult, css } from 'lit';
import { property, state } from 'lit/decorators.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';

// eslint-disable-next-line import/no-extraneous-dependencies
import { OscdActionPane } from '@openenergytools/oscd-action-pane';

import { MdIcon } from '@scopedelement/material-web/icon/MdIcon.js';
import { MdIconButton } from '@scopedelement/material-web/iconbutton/MdIconButton.js';
import { MdMenu } from '@scopedelement/material-web/menu/MdMenu.js';
import { MdMenuItem } from '@scopedelement/material-web/menu/MdMenuItem.js';

import {
  renderSubstations,
  SubstationEditor,
} from './substation/substation-editor.js';
import { LineEditor, renderLines } from './substation/line-editor.js';
import { renderProcesses } from './substation/process-editor.js';
import { getChildElementsByTagName } from './foundation.js';
import { TextEditor } from './substation/text-editor.js';
import { PrivateEditor } from './substation/private-editor.js';
import { LNodeEditor } from './substation/l-node-editor.js';
import { ConductingEquipmentEditor } from './substation/conducting-equipment-editor.js';

function shouldShowFunctions(): boolean {
  return localStorage.getItem('showfunctions') === 'on';
}

function setShowFunctions(value: 'on' | 'off') {
  localStorage.setItem('showfunctions', value);
}

function shouldShowUserDef(): boolean {
  return localStorage.getItem('showuserdef') === 'on';
}

function setShowUserDef(value: 'on' | 'off') {
  localStorage.setItem('showuserdef', value);
}

/** An editor [[`plugin`]] for editing the `Substation` section. */
export default class SclSubstationEditorPlugin extends ScopedElementsMixin(
  LitElement
) {
  static scopedElements = {
    'substation-editor': SubstationEditor,
    'private-editor': PrivateEditor,
    'text-editor': TextEditor,
    'l-node-editor': LNodeEditor,
    'line-editor': LineEditor,
    'conducting-equipment-editor': ConductingEquipmentEditor,
    'oscd-action-pane': OscdActionPane,
    'md-icon-button': MdIconButton,
    'md-icon': MdIcon,
    'md-menu': MdMenu,
    'md-menu-item': MdMenuItem,
  };

  /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
  @property({ attribute: false })
  doc?: XMLDocument;

  @property({ type: Number })
  editCount = -1;

  @state()
  get substations(): Element[] {
    if (!this.doc) return [];
    return getChildElementsByTagName(this.doc.documentElement, 'Substation');
  }

  @state()
  get lines(): Element[] {
    if (!this.doc) return [];
    return getChildElementsByTagName(this.doc.documentElement, 'Line');
  }

  @state()
  get processes(): Element[] {
    if (!this.doc) return [];
    return getChildElementsByTagName(this.doc.documentElement, 'Process');
  }

  toggleShowFunctions(): void {
    if (shouldShowFunctions()) setShowFunctions('off');
    else setShowFunctions('on');
    this.requestUpdate();
  }

  toggleShowUserDef(): void {
    if (shouldShowUserDef()) setShowUserDef('off');
    else setShowUserDef('on');
    this.requestUpdate();
  }

  render(): TemplateResult {
    if (!this.doc)
      return html`<h1>
        <span style="color: var(--oscd-theme-base1)">No SCL file loaded</span>
      </h1>`;

    if (
      !this.substations.length &&
      !this.lines.length &&
      !this.processes.length
    )
      return html`<h1>
        <span style="color: var(--oscd-theme-base1)"
          >No Substation section in the project</span
        >
      </h1>`;

    return html`<h1>
        <nav>
          <abbr title="Filter user-defined information">
            <md-icon-button
              ?selected=${shouldShowUserDef()}
              @click=${() => this.toggleShowUserDef()}
              id="showuserdef"
              ?disabled="${!shouldShowFunctions()}"
              ><md-icon>subtitles_off</md-icon
              ><md-icon slot="selected">subtitles</md-icon></md-icon-button
            >
          </abbr>
          <abbr title="Show Function Structure">
            <md-icon-button
              ?selected=${shouldShowFunctions()}
              @click=${() => this.toggleShowFunctions()}
              id="showfunctions"
              ><md-icon>layers_clear</md-icon
              ><md-icon slot="selected">layers</md-icon></md-icon-button
            >
          </abbr>
        </nav>
      </h1>
      <section>
        ${renderSubstations(
          this.doc.documentElement,
          this.editCount,
          shouldShowFunctions(),
          shouldShowUserDef()
        )}
        ${renderLines(
          this.doc.documentElement,
          this.editCount,
          shouldShowFunctions(),
          shouldShowUserDef()
        )}
        ${renderProcesses(this.doc.documentElement, {
          docVersion: this.editCount,
          showfunctions: shouldShowFunctions(),
          showuserdef: shouldShowUserDef(),
        })}
      </section>`;
  }

  static styles = css`
    h1 {
      color: var(--mdc-theme-on-surface);
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 0px;
      line-height: 48px;
      padding-left: 0.3em;
      transition: background-color 150ms linear;
    }

    h1 > nav,
    h1 > abbr > md-icon-button {
      float: right;
    }

    section {
      padding: 8px 12px 16px;
      display: grid;
      gap: 12px;
    }

    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    * {
      --md-sys-color-primary: var(--oscd-primary);
      --md-sys-color-secondary: var(--oscd-secondary);
      --md-sys-typescale-body-large-font: var(--oscd-theme-text-font);
      --md-outlined-text-field-input-text-color: var(--oscd-base01);

      --md-sys-color-surface: var(--oscd-base3);
      --md-sys-color-on-surface: var(--oscd-base00);
      --md-sys-color-on-primary: var(--oscd-base2);
      --md-sys-color-on-surface-variant: var(--oscd-base00);
      --md-menu-container-color: var(--oscd-base3);

      --md-filled-icon-button-container-color: var(--oscd-secondary);

      --oscd-action-pane-theme-surface: var(--oscd-theme-base3);
      --oscd-action-pane-theme-on-surface: var(--oscd-theme-base00);
      --oscd-action-pane-theme-on-primary: var(--oscd-theme-base2);
      --oscd-action-pane-theme-font: 'Roboto';
      --oscd-action-icon-theme-font: 'Roboto';

      --oscd-action-icon-theme-on-surface: var(--oscd-theme-base00);
      --oscd-action-icon-theme-on-primary: var(--oscd-theme-base2);
    }

    :host {
      width: 100vw;
    }
  `;
}
