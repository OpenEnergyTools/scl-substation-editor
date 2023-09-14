/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@material/mwc-icon-button';
import '@openscd/oscd-action-pane';

import './voltage-level-editor.js';
import { renderFunctions } from './function-editor.js';
import { renderGeneralEquipment } from './general-equipment-editor.js';
import { renderLNodes } from './l-node-editor.js';
import { renderPowerTransformerContainer } from './power-transformer-editor.js';

import { getChildElementsByTagName, styles } from '../foundation.js';
import BaseSubstationElementEditor from './base-substation-element-editor.js';

/** [[`Substation`]] plugin subeditor for editing `Substation` sections. */
@customElement('substation-editor')
export class SubstationEditor extends BaseSubstationElementEditor {
  @property({ type: String })
  get header(): string {
    const name = this.element.getAttribute('name') ?? '';
    const desc = this.element.getAttribute('desc');

    return `${name} ${desc ? `- ${desc}` : ''}`;
  }

  render(): TemplateResult {
    return html`<oscd-action-pane label="${this.header}">
      <abbr slot="action" title="Edit">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="Remove">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.removeElement()}
        ></mwc-icon-button>
      </abbr>
      ${this.renderAddButton()}
      ${renderGeneralEquipment(
        this.element,
        this.editCount,
        this.showfunctions
      )}
      ${renderLNodes(this.element, this.editCount, this.showfunctions)}
      ${renderFunctions(this.element, this.editCount, this.showfunctions)}
      ${renderPowerTransformerContainer(
        this.element,
        this.editCount,
        this.showfunctions
      )}
      ${Array.from(this.element.querySelectorAll('VoltageLevel')).map(
        voltageLevel =>
          html`<voltage-level-editor
            .editCount=${this.editCount}
            .element=${voltageLevel}
            ?showfunctions=${this.showfunctions}
          ></voltage-level-editor>`
      )}</oscd-action-pane
    >`;
  }

  static styles = css`
    ${styles}
  `;
}

export function renderSubstations(
  parent: Element,
  editCount: number,
  showfunctions: boolean
): TemplateResult {
  const Substations = getChildElementsByTagName(parent, 'Substation');
  return html` ${Substations.map(
    Substation =>
      html`<substation-editor
        .element=${Substation}
        .editCount=${editCount}
        ?showfunctions=${showfunctions}
      ></substation-editor>`
  )}`;
}
