/* eslint-disable no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '@openscd/oscd-action-pane';
import { renderConductingEquipments } from './conducting-equipment-editor.js';
import { renderFunctions } from './function-editor.js';
import { renderGeneralEquipment } from './general-equipment-editor.js';
import { renderLines } from './line-editor.js';
import { renderLNodes } from './l-node-editor.js';
import { renderSubstations } from './substation-editor.js';

import { styles } from '../foundation.js';
import BaseSubstationElementEditor from './base-substation-element-editor.js';

@customElement('process-editor')
export class ProcessEditor extends BaseSubstationElementEditor {
  @state()
  get header(): string {
    const name = this.element.getAttribute('name') ?? '';
    const desc = this.element.getAttribute('desc');

    return `${name} ${desc ? `—${desc}` : ''}`;
  }

  render(): TemplateResult {
    return html`<oscd-action-pane label=${this.header}>
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
        ></mwc-icon-button
      ></abbr>
      ${this.renderAddButton()}
      ${renderConductingEquipments(
        this.element,
        this.editCount,
        this.showfunctions
      )}
      ${renderGeneralEquipment(
        this.element,
        this.editCount,
        this.showfunctions
      )}
      ${renderFunctions(this.element, this.editCount, this.showfunctions)}
      ${renderLNodes(this.element, this.editCount, this.showfunctions)}
      ${renderLines(this.element, this.editCount, this.showfunctions)}
      ${renderSubstations(this.element, this.editCount, this.showfunctions)}
      ${renderProcesses(this.element, this.editCount, this.showfunctions)}
    </oscd-action-pane>`;
  }

  static styles = css`
    ${styles}

    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
}

export function renderProcesses(
  parent: Element,
  editCount: number,
  showfunctions: boolean
): TemplateResult {
  const processes = parent.querySelectorAll(':root > Process');

  return processes.length
    ? html` ${Array.from(processes).map(
        process =>
          html`<process-editor
            .element=${process}
            .editCount=${editCount}
            ?showfunctions=${showfunctions}
          ></process-editor>`
      )}`
    : html``;
}
