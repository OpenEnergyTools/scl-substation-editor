/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@openscd/oscd-action-icon';
import '@openscd/oscd-action-pane';
import './tapchanger-editor.js';
import { renderLNodes } from './l-node-editor.js';
import { renderEqFunctions } from './eq-function-editor.js';

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
      ${renderLNodes(this.element, this.editCount, this.showfunctions)}
      ${renderEqFunctions(this.element, this.editCount, this.showfunctions)}
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
