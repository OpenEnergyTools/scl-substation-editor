/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@material/mwc-fab';
import '@material/mwc-icon-button';

import '@openscd/oscd-action-icon';
import '@openscd/oscd-action-pane';

import { renderLNodes } from './l-node-editor.js';
import { renderEqFunctions } from './eq-function-editor.js';

import { getChildElementsByTagName, getIcon, styles } from '../foundation.js';
import { renderSubEquipments } from './sub-equipment-editor.js';
import BaseSubstationElementEditor from './base-substation-element-editor.js';

/** [[`SubstationEditor`]] subeditor for a `ConductingEquipment` element. */
@customElement('conducting-equipment-editor')
export class ConductingEquipmentEditor extends BaseSubstationElementEditor {
  /** ConductingEquipment name attribute */
  @property({ type: String })
  get name(): string {
    return `${this.element.getAttribute('name')}`;
  }

  renderContentPane(): TemplateResult {
    return html`<mwc-icon slot="icon" style="width:24px;height:24px"
      >${getIcon(this.element)}</mwc-icon
    > `;
  }

  renderContentIcon(): TemplateResult {
    return html`<mwc-icon slot="icon">${getIcon(this.element)}</mwc-icon>
      <mwc-fab
        class="action edit"
        slot="action"
        mini
        icon="edit"
        @click="${() => this.openEditWizard()}"
      ></mwc-fab>
      <mwc-fab
        class="action remove"
        slot="action"
        mini
        icon="delete"
        @click="${() => this.removeElement()}"
      ></mwc-fab> `;
  }

  render(): TemplateResult {
    if (this.showfunctions)
      return html`<oscd-action-pane label="${this.name}">
      <abbr slot="action" title="Edit">
          <mwc-icon-button
            class="action edit"
            icon="edit"
            @click=${() => this.openEditWizard()}
          ></mwc-icon-button>
        </abbr>
      <abbr slot="action" title="Remove">
        <mwc-icon-button
          class="action remove"
          icon="delete"
          @click=${() => this.removeElement()}
        ></mwc-icon-button>
      </abbr>
      ${this.renderAddButton()}
      ${this.renderContentPane()}
        ${renderLNodes(this.element, this.editCount, this.showfunctions)}
        ${renderEqFunctions(this.element, this.editCount)}
        ${renderSubEquipments(this.element, this.editCount, this.showfunctions)}
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
  showfunctions: boolean
): TemplateResult {
  const conductingEquipments = getChildElementsByTagName(
    parent,
    'ConductingEquipment'
  );

  if (showfunctions)
    return html` ${conductingEquipments.map(
      conductingEquipment =>
        html`<conducting-equipment-editor
          .element=${conductingEquipment}
          .editCount=${editCount}
          ?showfunctions=${showfunctions}
        ></conducting-equipment-editor>`
    )}`;

  return conductingEquipments.length
    ? html` <div class="content actionicon">
        ${conductingEquipments.map(
          conductingEquipment =>
            html`<conducting-equipment-editor
              .editCount=${editCount}
              .element=${conductingEquipment}
              ?showfunctions=${showfunctions}
            ></conducting-equipment-editor>`
        )}
      </div>`
    : html``;
}
