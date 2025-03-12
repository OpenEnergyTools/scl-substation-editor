/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, css, html } from 'lit';
import { property } from 'lit/decorators.js';

import { OscdActionPane } from '@openenergytools/oscd-action-pane';
import { MdIconButton } from '@scopedelement/material-web/iconbutton/MdIconButton.js';
import { MdIcon } from '@scopedelement/material-web/icon/MdIcon.js';
import { MdMenu } from '@scopedelement/material-web/menu/MdMenu.js';
import { MdMenuItem } from '@scopedelement/material-web/menu/MdMenuItem.js';

import { LNodeEditor, renderLNodes } from './l-node-editor.js';
import { renderEqFunctions } from './eq-function-editor.js';
import {
  renderSubEquipments,
  SubEquipmentEditor,
} from './sub-equipment-editor.js';
import { renderText, TextEditor } from './text-editor.js';
import { PrivateEditor, renderPrivate } from './private-editor.js';
import { TapChangerEditor } from './tap-changer-editor.js';

import { getChildElementsByTagName, styles } from '../foundation.js';
import BaseSubstationElementEditor from './base-substation-element-editor.js';

export class TransformerWindingEditor extends BaseSubstationElementEditor {
  static scopedElements = {
    'private-editor': PrivateEditor,
    'text-editor': TextEditor,
    'l-node-editor': LNodeEditor,
    'tap-changer-editor': TapChangerEditor,
    'sub-equipment-editor': SubEquipmentEditor,
    'oscd-action-pane': OscdActionPane,
    'md-icon-button': MdIconButton,
    'md-icon': MdIcon,
    'md-menu': MdMenu,
    'md-menu-item': MdMenuItem,
  };

  /** TransformerWinding name attribute */
  @property({ type: String })
  get label(): string {
    const name = this.element.getAttribute('name');
    const desc = this.element.getAttribute('desc');

    return `${name}${desc ? `—  ${desc}` : ''}`;
  }

  private renderTapChanger(): TemplateResult {
    const tapChangers = getChildElementsByTagName(this.element, 'TapChanger');

    return html` ${tapChangers.map(
      tapChanger =>
        html`<tap-changer-editor
          .element=${tapChanger}
          .editCount=${this.editCount}
          ?showfunctions=${this.showfunctions}
          ?showuserdef=${this.showuserdef}
        ></tap-changer-editor>`
    )}`;
  }

  render(): TemplateResult {
    return html`<oscd-action-pane label="${this.label}">
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
      ${this.renderTapChanger()}
      ${renderEqFunctions(this.element, {
        docVersion: this.editCount,
        showuserdef: this.showuserdef,
      })}
      ${renderSubEquipments(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
    </oscd-action-pane> `;
  }

  static styles = css`
    ${styles}
  `;
}
