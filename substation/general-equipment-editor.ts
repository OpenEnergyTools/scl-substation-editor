/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import '@openscd/oscd-action-pane';
import '../substation/eq-function-editor.js';
import '../substation/l-node-editor.js';

import {
  generalConductingEquipmentIcon,
  getChildElementsByTagName,
} from '../foundation.js';

@customElement('general-equipment-editor')
export class GeneralEquipmentEditor extends LitElement {
  @property({ attribute: false })
  doc!: XMLDocument;

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

  private renderLNodes(): TemplateResult {
    const lNodes = getChildElementsByTagName(this.element, 'LNode');

    return lNodes.length
      ? html`<div class="container lnode">
          ${lNodes.map(
            lNode =>
              html`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${lNode}
              ></l-node-editor>`
          )}
        </div>`
      : html``;
  }

  private renderEqFunctions(): TemplateResult {
    const eFunctions = getChildElementsByTagName(this.element, 'EqFunction');

    return eFunctions.length
      ? html`${eFunctions.map(
          eFunction =>
            html` <eq-function-editor
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${eFunction}
            ></eq-function-editor>`
        )}`
      : html``;
  }

  render(): TemplateResult {
    if (this.showfunctions)
      return html`<oscd-action-pane label=${this.header}>
        ${this.renderLNodes()} ${this.renderEqFunctions()}
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
