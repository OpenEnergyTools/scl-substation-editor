/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@openscd/oscd-action-icon';
import '@openscd/oscd-action-pane';
import './l-node-editor.js';
import './eq-function-editor.js';

import { getChildElementsByTagName } from '../foundation.js';

/** [[`SubstationEditor`]] subeditor for a child-less `SubEquipment` element. */
@customElement('sub-equipment-editor')
export class SubEquipmentEditor extends LitElement {
  /** The document being edited as provided to editor by [[`Zeroline`]]. */
  @property({ attribute: false })
  doc!: XMLDocument;

  @property({ type: Number })
  editCount = -1;

  /** SCL element SubEquipment */
  @property({ attribute: false })
  element!: Element;

  /** SubEquipment name attribute */
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

    const phase = `${
      this.element.hasAttribute('phase')
        ? ` (${this.element.getAttribute('phase')})`
        : ''
    }`;

    return `${name}${description}${phase}`;
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
    const eqFunctions = getChildElementsByTagName(this.element, 'EqFunction');
    return eqFunctions.length
      ? html` ${eqFunctions.map(
          eqFunction =>
            html`<eq-function-editor
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${eqFunction}
            ></eq-function-editor>`
        )}`
      : html``;
  }

  render(): TemplateResult {
    return html`<oscd-action-pane label="${this.label}">
      ${this.renderLNodes()} ${this.renderEqFunctions()}
    </oscd-action-pane> `;
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
