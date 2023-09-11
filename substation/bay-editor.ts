import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@openscd/oscd-action-pane';

import './power-transformer-editor.js';
import { renderConductingEquipments } from './conducting-equipment-editor.js';
import { renderFunctions } from './function-editor.js';
import { renderGeneralEquipment } from './general-equipment-editor.js';
import { renderLNodes } from './l-node-editor.js';

import { getChildElementsByTagName, styles } from '../foundation.js';

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

  render(): TemplateResult {
    return html`<oscd-action-pane label="${this.header}">
      ${renderGeneralEquipment(
        this.element,
        this.editCount,
        this.showfunctions
      )}
      ${renderLNodes(this.element, this.editCount, this.showfunctions)}
      ${renderFunctions(this.element, this.editCount, this.showfunctions)}
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
            html`<power-transformer-editor
              .element=${pwt}
              .editCount=${this.editCount}
              ?showfunctions=${this.showfunctions}
            ></power-transformer-editor>`
        )}
        ${renderConductingEquipments(
          this.element,
          this.editCount,
          this.showfunctions
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
