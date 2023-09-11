/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@openscd/oscd-action-icon';
import '@openscd/oscd-action-pane';
import './eq-function-editor.js';
import './l-node-editor.js';
import './tapchanger-editor.js';

import { getChildElementsByTagName, styles } from '../foundation.js';

@customElement('transformer-winding-editor')
export class TransformerWindingEditor extends LitElement {
  /** The document being edited as provided to editor by [[`Zeroline`]]. */
  @property({ attribute: false })
  doc!: XMLDocument;

  @property({ type: Number })
  editCount = -1;

  /** SCL element TransformerWinding */
  @property({ attribute: false })
  element!: Element;

  /** Whether `EqFunction` elements are rendered */
  @property({ type: Boolean })
  showfunctions = false;

  /** TransformerWinding name attribute */
  @property({ type: String })
  get label(): string {
    const name = `${
      this.element.hasAttribute('name')
        ? `${this.element.getAttribute('name')}`
        : ''
    }`;

    const description = `${
      this.element.hasAttribute('desc')
        ? ` - ${this.element.getAttribute('desc')}`
        : ''
    }`;

    return `${name}${description}`;
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
    if (!this.showfunctions) return html``;
    const eqFunctions = getChildElementsByTagName(this.element, 'EqFunction');
    return eqFunctions.length
      ? html` ${eqFunctions.map(
          eqFunction =>
            html`<eq-function-editor
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${eqFunction}
              ?showfunctions=${this.showfunctions}
            ></eq-function-editor>`
        )}`
      : html``;
  }

  private renderTapChanger(): TemplateResult {
    if (!this.showfunctions) return html``;
    const tapChangers = getChildElementsByTagName(this.element, 'TapChanger');
    return tapChangers.length
      ? html` ${tapChangers.map(
          tapChanger =>
            html`<tapchanger-editor
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${tapChanger}
              ?showfunctions=${this.showfunctions}
            ></tapchanger-editor>`
        )}`
      : html``;
  }

  render(): TemplateResult {
    return html`<oscd-action-pane label="${this.label}">
      ${this.renderLNodes()} ${this.renderEqFunctions()}
      ${this.renderTapChanger()}
    </oscd-action-pane> `;
  }

  static styles = css`
    ${styles}

    :host(.moving) {
      opacity: 0.3;
    }

    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
}
