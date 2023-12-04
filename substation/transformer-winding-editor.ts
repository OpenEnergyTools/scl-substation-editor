/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@openscd/oscd-action-icon';
import '@openscd/oscd-action-pane';

import './tap-changer-editor.js';
import { renderLNodes } from './l-node-editor.js';
import { renderEqFunctions } from './eq-function-editor.js';

import { getChildElementsByTagName, styles } from '../foundation.js';
import BaseSubstationElementEditor from './base-substation-element-editor.js';

@customElement('transformer-winding-editor')
export class TransformerWindingEditor extends BaseSubstationElementEditor {
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
            html`<tap-changer-editor
              .element=${tapChanger}
              .editCount=${this.editCount}
              ?showfunctions=${this.showfunctions}
            ></tap-changer-editor>`
        )}`
      : html``;
  }

  render(): TemplateResult {
    return html`<oscd-action-pane label="${this.label}">
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
      ${renderLNodes(this.element, this.editCount, this.showfunctions)}
      ${renderEqFunctions(this.element, this.editCount)}
      ${this.renderTapChanger()}
    </oscd-action-pane> `;
  }

  static styles = css`
    ${styles}
  `;
}
