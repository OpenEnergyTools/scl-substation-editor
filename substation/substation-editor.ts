import { TemplateResult, css, html } from 'lit';
import { property } from 'lit/decorators.js';

import { MdMenu } from '@scopedelement/material-web/menu/MdMenu.js';
import { MdMenuItem } from '@scopedelement/material-web/menu/MdMenuItem.js';
import { MdIconButton } from '@scopedelement/material-web/iconbutton/MdIconButton.js';
import { MdIcon } from '@scopedelement/material-web/icon/MdIcon.js';
import { OscdActionPane } from '@openenergytools/oscd-action-pane';

import { VoltageLevelEditor } from './voltage-level-editor.js';
import { renderFunctions } from './function-editor.js';
import { renderGeneralEquipments } from './general-equipment-editor.js';
import { LNodeEditor, renderLNodes } from './l-node-editor.js';
import {
  PowerTransformerEditor,
  renderPowerTransformerContainer,
} from './power-transformer-editor.js';
import { renderText, TextEditor } from './text-editor.js';
import { PrivateEditor, renderPrivate } from './private-editor.js';

import { getChildElementsByTagName, styles } from '../foundation.js';
import BaseSubstationElementEditor from './base-substation-element-editor.js';

/** [[`Substation`]] plugin subeditor for editing `Substation` sections. */
export class SubstationEditor extends BaseSubstationElementEditor {
  static scopedElements = {
    'voltage-level-editor': VoltageLevelEditor,
    'power-transformer-editor': PowerTransformerEditor,
    'text-editor': TextEditor,
    'private-editor': PrivateEditor,
    'l-node-editor': LNodeEditor,
    'oscd-action-pane': OscdActionPane,
    'md-menu': MdMenu,
    'md-menu-item': MdMenuItem,
    'md-icon-button': MdIconButton,
    'md-icon': MdIcon,
  };

  @property({ type: String })
  get header(): string {
    const name = this.element.getAttribute('name');
    const desc = this.element.getAttribute('desc');

    return `${name} ${desc ? `- ${desc}` : ''}`;
  }

  render(): TemplateResult {
    return html`<oscd-action-pane label="${this.header}">
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
      ${renderGeneralEquipments(this.element, {
        docVersion: this.editCount,
        showfunctions: this.showfunctions,
        showuserdef: this.showuserdef,
      })}
      ${renderPowerTransformerContainer(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${getChildElementsByTagName(this.element, 'VoltageLevel').map(
        voltageLevel =>
          html`<voltage-level-editor
            .editCount=${this.editCount}
            .element=${voltageLevel}
            ?showfunctions=${this.showfunctions}
            ?showuserdef=${this.showuserdef}
          ></voltage-level-editor>`
      )}
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

export function renderSubstations(
  parent: Element,
  editCount: number,
  showfunctions: boolean,
  showuserdef: boolean
): TemplateResult {
  const substations = getChildElementsByTagName(parent, 'Substation');

  return html` ${substations.map(
    Substation =>
      html`<substation-editor
        .element=${Substation}
        .editCount=${editCount}
        ?showfunctions=${showfunctions}
        ?showuserdef=${showuserdef}
      ></substation-editor>`
  )}`;
}
