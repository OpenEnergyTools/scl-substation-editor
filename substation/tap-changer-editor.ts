/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, css, html } from 'lit';
import { state } from 'lit/decorators.js';

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

import { styles } from '../foundation.js';
import BaseSubstationElementEditor from './base-substation-element-editor.js';

export class TapChangerEditor extends BaseSubstationElementEditor {
  static scopedElements = {
    'private-editor': PrivateEditor,
    'text-editor': TextEditor,
    'l-node-editor': LNodeEditor,
    'sub-equipment-editor': SubEquipmentEditor,
    'oscd-action-pane': OscdActionPane,
    'md-icon-button': MdIconButton,
    'md-icon': MdIcon,
    'md-menu': MdMenu,
    'md-menu-item': MdMenuItem,
  };

  @state()
  get header(): string {
    const name = this.element.getAttribute('name');
    const desc = this.element.getAttribute('desc');

    return `${name} ${desc ? `—${desc}` : ''}`;
  }

  render(): TemplateResult {
    return html`<oscd-action-pane label=${this.header}>
      <abbr slot="action" title="Edit">
        <md-icon-button
          class="action edit"
          @click=${() => this.openEditWizard()}
          ><md-icon>edit</md-icon></md-icon-button
        > </abbr
      ><abbr slot="action" title="Remove">
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
    </oscd-action-pane>`;
  }

  static styles = css`
    ${styles}
  `;
}
