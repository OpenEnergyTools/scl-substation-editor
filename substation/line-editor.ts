/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, css, html } from 'lit';
import { state } from 'lit/decorators.js';

import { OscdActionPane } from '@openenergytools/oscd-action-pane';
import { MdIconButton } from '@scopedelement/material-web/iconbutton/MdIconButton.js';
import { MdIcon } from '@scopedelement/material-web/icon/MdIcon.js';
import { MdMenu } from '@scopedelement/material-web/menu/MdMenu.js';
import { MdMenuItem } from '@scopedelement/material-web/menu/MdMenuItem.js';

import {
  ConductingEquipmentEditor,
  renderConductingEquipments,
} from './conducting-equipment-editor.js';
import { renderFunctions } from './function-editor.js';
import { renderGeneralEquipments } from './general-equipment-editor.js';
import { LNodeEditor, renderLNodes } from './l-node-editor.js';
import { renderText, TextEditor } from './text-editor.js';
import { PrivateEditor, renderPrivate } from './private-editor.js';

import { getChildElementsByTagName, styles } from '../foundation.js';
import BaseSubstationElementEditor from './base-substation-element-editor.js';

export class LineEditor extends BaseSubstationElementEditor {
  static scopedElements = {
    'private-editor': PrivateEditor,
    'text-editor': TextEditor,
    'l-node-editor': LNodeEditor,
    'conducting-equipment-editor': ConductingEquipmentEditor,
    'oscd-action-pane': OscdActionPane,
    'md-icon-button': MdIconButton,
    'md-icon': MdIcon,
    'md-menu': MdMenu,
    'md-menu-item': MdMenuItem,
  };

  get voltage(): string | null {
    const V = this.element.querySelector(`:scope > Voltage`);
    if (V === null) return null;
    const v = V.textContent;
    const m = V.getAttribute('multiplier');
    const u = m === null ? 'V' : ` ${m}V`;
    return v ? v + u : null;
  }

  @state()
  get header(): string {
    const name = this.element.getAttribute('name');
    const desc = this.element.getAttribute('desc');
    const volt = this.voltage;

    return `${name} ${desc ? `- ${desc}` : ''} ${
      volt === null ? '' : `(${volt})`
    }`;
  }

  render(): TemplateResult {
    return html`<oscd-action-pane label=${this.header}>
      <abbr slot="action" title="Edit">
        <md-icon-button
          class="action edit"
          @click=${() => this.openEditWizard()}
          ><md-icon>edit</md-icon></md-icon-button
        >
      </abbr>
      <abbr slot="action" title="Remove">
        <md-icon-button
          class="action remove"
          @click=${() => this.removeElement()}
          ><md-icon>delete</md-icon></md-icon-button
        >
      </abbr>
      ${this.renderAddButton()}
      ${renderText(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderPrivate(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderLNodes(this.element, this.editCount, this.showfunctions)}
      ${renderConductingEquipments(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderGeneralEquipments(this.element, {
        docVersion: this.editCount,
        showfunctions: this.showfunctions,
        showuserdef: this.showuserdef,
      })}
      ${renderFunctions(this.element, {
        docVersion: this.editCount,
        showfunctions: this.showfunctions,
        showuserdef: this.showuserdef,
      })}
    </oscd-action-pane>`;
  }

  static styles = css`
    ${styles}
  `;
}

export function renderLines(
  parent: Element,
  editCount: number,
  showfunctions: boolean,
  showuserdef: boolean
): TemplateResult {
  const lines = getChildElementsByTagName(parent, 'Line');

  return html` ${lines.map(
    Line =>
      html`<line-editor
        .element=${Line}
        .editCount=${editCount}
        ?showfunctions=${showfunctions}
        ?showuserdef=${showuserdef}
      ></line-editor>`
  )}`;
}
