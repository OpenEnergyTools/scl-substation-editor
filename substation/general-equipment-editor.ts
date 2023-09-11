/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import '@openscd/oscd-action-pane';
import { renderLNodes } from './l-node-editor.js';
import { renderEqFunctions } from './eq-function-editor.js';

import {
  generalConductingEquipmentIcon,
  getChildElementsByTagName,
} from '../foundation.js';

@customElement('general-equipment-editor')
export class GeneralEquipmentEditor extends LitElement {
  @property({ type: Number })
  editCount = -1;

  @property({ attribute: false })
  element!: Element;

  /** Whether `Function` and `SubFunction` are rendered */
  @property({ type: Boolean })
  showfunctions = false;

  @state()
  get header(): string {
    const name = this.element.getAttribute('name') ?? '';
    const desc = this.element.getAttribute('desc');

    if (!this.showfunctions) return `${name}`;

    return `${name} ${desc ? `—  ${desc}` : ''}`;
  }

  render(): TemplateResult {
    if (this.showfunctions)
      return html`<oscd-action-pane label=${this.header}>
        ${renderLNodes(this.element, this.editCount, this.showfunctions)}
        ${renderEqFunctions(this.element, this.editCount, this.showfunctions)}
      </oscd-action-pane>`;

    return html`<oscd-action-icon label=${this.header}>
      <mwc-icon slot="icon">${generalConductingEquipmentIcon}</mwc-icon>
    </oscd-action-icon>`;
  }

  static styles = css`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    .container.lnode {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }
  `;
}

export function renderGeneralEquipment(
  parent: Element,
  editCount: number,
  showfunctions: boolean
): TemplateResult {
  const generalEquipment = getChildElementsByTagName(
    parent,
    'GeneralEquipment'
  );

  return generalEquipment.length
    ? html` <div
        class="${classMap({
          content: true,
          actionicon: !showfunctions,
        })}"
      >
        ${generalEquipment.map(
          gEquipment =>
            html`<general-equipment-editor
              .editCount=${editCount}
              .element=${gEquipment}
              ?showfunctions=${showfunctions}
            ></general-equipment-editor>`
        )}
      </div>`
    : html``;
}
