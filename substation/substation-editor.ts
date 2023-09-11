/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import '@openscd/oscd-action-pane';
import './l-node-editor.js';
import './function-editor.js';
import './powertransformer-editor.js';
import './voltage-level-editor.js';

import {
  getChildElementsByTagName,
  renderGeneralEquipment,
  styles,
} from '../foundation.js';

/** [[`Substation`]] plugin subeditor for editing `Substation` sections. */
@customElement('substation-editor')
export class SubstationEditor extends LitElement {
  /** The document being edited as provided to editor by [[`Zeroline`]]. */
  @property({ attribute: false })
  doc!: XMLDocument;

  @property({ type: Number })
  editCount = -1;

  /** The edited `Element`, a common property of all Substation subeditors. */
  @property({ attribute: false })
  element!: Element;

  /** Whether `Function` and `SubFunction` are rendered */
  @property({ type: Boolean })
  showfunctions = false;

  @property({ type: String })
  get header(): string {
    const name = this.element.getAttribute('name') ?? '';
    const desc = this.element.getAttribute('desc');

    return `${name} ${desc ? `- ${desc}` : ''}`;
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
      this.element?.querySelectorAll('Substation > PowerTransformer') ?? []
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
      ${Array.from(this.element.querySelectorAll('VoltageLevel')).map(
        voltageLevel =>
          html`<voltage-level-editor
            .editCount=${this.editCount}
            .doc=${this.doc}
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
