/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, css, html } from 'lit';
import { property } from 'lit/decorators.js';

import { OscdActionIcon } from '@openenergytools/oscd-action-icon';
import { OscdActionPane } from '@openenergytools/oscd-action-pane';
import { MdIconButton } from '@scopedelement/material-web/iconbutton/MdIconButton.js';
import { MdIcon } from '@scopedelement/material-web/icon/MdIcon.js';
import { MdMenu } from '@scopedelement/material-web/menu/MdMenu.js';
import { MdMenuItem } from '@scopedelement/material-web/menu/MdMenuItem.js';
import { MdFilledIconButton } from '@scopedelement/material-web/iconbutton/MdFilledIconButton.js';

import { LNodeEditor, renderLNodes } from './l-node-editor.js';
import { renderEqFunctions } from './eq-function-editor.js';
import { renderText, TextEditor } from './text-editor.js';
import { PrivateEditor, renderPrivate } from './private-editor.js';

import { getChildElementsByTagName, getIcon, styles } from '../foundation.js';
import {
  renderSubEquipments,
  SubEquipmentEditor,
} from './sub-equipment-editor.js';
import BaseSubstationElementEditor from './base-substation-element-editor.js';

/** [[`SubstationEditor`]] subeditor for a `ConductingEquipment` element. */
export class ConductingEquipmentEditor extends BaseSubstationElementEditor {
  static scopedElements = {
    'private-editor': PrivateEditor,
    'text-editor': TextEditor,
    'l-node-editor': LNodeEditor,
    'sub-equipment-editor': SubEquipmentEditor,
    'oscd-action-icon': OscdActionIcon,
    'oscd-action-pane': OscdActionPane,
    'md-filled-icon-button': MdFilledIconButton,
    'md-icon-button': MdIconButton,
    'md-icon': MdIcon,
    'md-menu': MdMenu,
    'md-menu-item': MdMenuItem,
  };

  /** ConductingEquipment name attribute */
  @property({ type: String })
  get name(): string {
    return `${this.element.getAttribute('name')}`;
  }

  renderContentPane(): TemplateResult {
    return html`<md-icon slot="icon" style="width:24px;height:24px"
      >${getIcon(this.element)}</md-icon
    > `;
  }

  renderContentIcon(): TemplateResult {
    return html`<md-icon slot="icon">${getIcon(this.element)}</md-icon>
      <md-filled-icon-button
        class="action edit"
        slot="action"
        mini
        @click="${() => this.openEditWizard()}"
        ><md-icon>edit</md-icon></md-filled-icon-button
      >
      <md-filled-icon-button
        class="action remove"
        slot="action"
        mini
        @click="${() => this.removeElement()}"
        ><md-icon>delete</md-icon></md-filled-icon-button
      > `;
  }

  render(): TemplateResult {
    if (this.showfunctions)
      return html`<oscd-action-pane label="${this.name}">
      <abbr slot="action" title="Edit">
          <md-icon-button
            class="action edit"
            icon="edit"
            @click=${() => this.openEditWizard()}
          ><md-icon>edit</md-icon></md-icon-button>
        </abbr>
      <abbr slot="action" title="Remove">
        <md-icon-button
          class="action remove"
          icon="delete"
          @click=${() => this.removeElement()}
        ><md-icon>delete</md-icon></md-icon-button>
      </abbr>
      ${this.renderAddButton()}
      ${this.renderContentPane()}
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
        </oscd-action-pane
        ></oscd-action-pane
      >`;

    return html`<oscd-action-icon label="${this.name}">
      ${this.renderContentIcon()}</oscd-action-icon
    >`;
  }

  static styles = css`
    ${styles}

    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
}

export function renderConductingEquipments(
  parent: Element,
  editCount: number,
  showfunctions: boolean,
  showuserdef: boolean
): TemplateResult {
  const condEqs = getChildElementsByTagName(parent, 'ConductingEquipment');

  if (showfunctions)
    return html`${condEqs.map(
      condEq =>
        html`<conducting-equipment-editor
          .element=${condEq}
          .editCount=${editCount}
          ?showfunctions=${showfunctions}
          ?showuserdef=${showuserdef}
        ></conducting-equipment-editor>`
    )}`;

  return condEqs.length
    ? html` <div class="content actionicon">
        ${condEqs.map(
          conductingEquipment =>
            html`<conducting-equipment-editor
              .editCount=${editCount}
              .element=${conductingEquipment}
              ?showfunctions=${showfunctions}
              ?showuserdef=${showuserdef}
            ></conducting-equipment-editor>`
        )}
      </div>`
    : html``;
}
