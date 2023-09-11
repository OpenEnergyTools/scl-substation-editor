/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import '@openscd/oscd-action-pane';
import './eq-sub-function-editor.js';
import './general-equipment-editor.js';
import {
  getChildElementsByTagName,
  renderGeneralEquipment,
} from '../foundation.js';

/** Pane rendering `EqFunction` element with its children */
@customElement('eq-function-editor')
export class EqFunctionEditor extends LitElement {
  /** The document being edited as provided to editor by [[`Zeroline`]]. */
  @property({ attribute: false })
  doc!: XMLDocument;

  @property({ type: Number })
  editCount = -1;

  /** The edited `EqFunction` element */
  @property({ attribute: false })
  element!: Element;

  @property({ type: Boolean })
  showfunctions = false;

  @state()
  private get header(): string {
    const name = this.element.getAttribute('name');
    const desc = this.element.getAttribute('desc');
    const type = this.element.getAttribute('type');

    return `${name}${desc ? ` - ${desc}` : ''}${type ? ` (${type})` : ''}`;
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

  private renderEqSubFunctions(): TemplateResult {
    const eqSubFunctions = getChildElementsByTagName(
      this.element,
      'EqSubFunction'
    );
    return html` ${eqSubFunctions.map(
      eqSubFunction =>
        html`<eq-sub-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${eqSubFunction}
          ?showfunctions=${this.showfunctions}
        ></eq-sub-function-editor>`
    )}`;
  }

  render(): TemplateResult {
    return html`<oscd-action-pane
      label="${this.header}"
      icon="functions"
      secondary
      highlighted
    >
      ${renderGeneralEquipment(this.doc, this.element, this.showfunctions)}
      ${this.renderLNodes()}${this.renderEqSubFunctions()}</oscd-action-pane
    >`;
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
