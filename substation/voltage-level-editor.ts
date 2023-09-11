/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import '@openscd/oscd-action-pane';
import './bay-editor.js';
import './general-equipment-editor.js';
import './powertransformer-editor.js';

import {
  getChildElementsByTagName,
  renderGeneralEquipment,
  styles,
} from '../foundation.js';

/** [[`Substation`]] subeditor for a `VoltageLevel` element. */
@customElement('voltage-level-editor')
export class VoltageLevelEditor extends LitElement {
  /** The document being edited as provided to editor by [[`Zeroline`]]. */
  @property({ attribute: false })
  doc!: XMLDocument;

  @property({ type: Number })
  editCount = -1;

  @property({ attribute: false })
  element!: Element;

  /** Whether `Function` and `SubFunction` are rendered */
  @property({ type: Boolean })
  showfunctions = false;

  @property()
  get voltage(): string | null {
    const V = this.element.querySelector(`VoltageLevel > Voltage`);
    if (V === null) return null;
    const v = V.textContent ?? '';
    const m = V.getAttribute('multiplier');
    const u = m === null ? 'V' : ` ${m}V`;
    return v ? v + u : null;
  }

  @property({ type: String })
  get header(): string {
    const name = this.element.getAttribute('name') ?? '';
    const desc = this.element.getAttribute('desc');

    return `${name} ${desc ? `- ${desc}` : ''}
    ${this.voltage === null ? '' : `(${this.voltage})`}`;
  }

  private renderLNodes(): TemplateResult {
    if (!this.showfunctions) return html``;

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

  renderFunctions(): TemplateResult {
    if (!this.showfunctions) return html``;

    const functions = getChildElementsByTagName(this.element, 'Function');
    return html` ${functions.map(
      fUnction =>
        html`<function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${fUnction}
          ?showfunctions=${this.showfunctions}
        ></function-editor>`
    )}`;
  }

  renderPowerTransformerContainer(): TemplateResult {
    const pwts = Array.from(
      this.element?.querySelectorAll('VoltageLevel > PowerTransformer') ?? []
    );
    return pwts?.length
      ? html`<div
          class="${classMap({
            ptrContent: true,
            actionicon: !this.showfunctions,
          })}"
        >
          ${pwts.map(
            pwt =>
              html`<powertransformer-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${pwt}
                ?showfunctions=${this.showfunctions}
              ></powertransformer-editor>`
          )}
        </div>`
      : html``;
  }

  render(): TemplateResult {
    return html`<oscd-action-pane label="${this.header}">
      ${renderGeneralEquipment(this.doc, this.element, this.showfunctions)}
      ${this.renderLNodes()}${this.renderFunctions()}
      ${this.renderPowerTransformerContainer()}
      <div id="bayContainer">
        ${Array.from(this.element?.querySelectorAll('Bay') ?? []).map(
          bay => html`<bay-editor
            .editCount=${this.editCount}
            .doc=${this.doc}
            .element=${bay}
            ?showfunctions=${this.showfunctions}
          ></bay-editor>`
        )}
      </div>
    </oscd-action-pane>`;
  }

  static styles = css`
    ${styles}

    #bayContainer {
      display: grid;
      grid-gap: 12px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(316px, auto));
    }

    @media (max-width: 387px) {
      #bayContainer {
        grid-template-columns: repeat(auto-fit, minmax(196px, auto));
      }
    }
  `;
}
