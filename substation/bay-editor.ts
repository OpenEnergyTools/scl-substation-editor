import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@openscd/oscd-action-pane';

import './conducting-equipment-editor.js';
import './general-equipment-editor.js';
import './powertransformer-editor.js';
import {
  getChildElementsByTagName,
  renderGeneralEquipment,
  styles,
} from '../foundation.js';

/** [[`SubstationEditor`]] subeditor for a `Bay` element. */
@customElement('bay-editor')
export class BayEditor extends LitElement {
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

  render(): TemplateResult {
    return html`<oscd-action-pane label="${this.header}">
      ${renderGeneralEquipment(this.doc, this.element, this.showfunctions)}
      ${this.renderLNodes()}${this.renderFunctions()}
      <div
        class="${classMap({
          content: true,
          actionicon: !this.showfunctions,
        })}"
      >
        ${Array.from(
          getChildElementsByTagName(this.element, 'PowerTransformer')
        ).map(
          pwt =>
            html`<powertransformer-editor
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${pwt}
              ?showfunctions=${this.showfunctions}
            ></powertransformer-editor>`
        )}
        ${Array.from(
          getChildElementsByTagName(this.element, 'ConductingEquipment')
        ).map(
          voltageLevel =>
            html`<conducting-equipment-editor
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${voltageLevel}
              ?showfunctions=${this.showfunctions}
            ></conducting-equipment-editor>`
        )}
      </div>
    </oscd-action-pane> `;
  }

  static styles = css`
    ${styles}

    .content.actionicon {
      display: grid;
      grid-gap: 12px;
      padding: 12px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }

    conducting-equipment-editor[showfunctions] {
      margin: 4px 8px 16px;
    }
  `;
}
