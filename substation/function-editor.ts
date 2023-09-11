/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import '@openscd/oscd-action-pane';

import { renderGeneralEquipment } from './general-equipment-editor.js';
import { renderLNodes } from './l-node-editor.js';
import { renderSubFunctions } from './sub-function-editor.js';
import { getChildElementsByTagName } from '../foundation.js';

/** Pane rendering `Function` element with its children */
@customElement('function-editor')
export class FunctionEditor extends LitElement {
  /** The document being edited as provided to editor by [[`Zeroline`]]. */
  @property({ attribute: false })
  doc!: XMLDocument;

  @property({ type: Number })
  editCount = -1;

  /** The edited `Function` element */
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

  render(): TemplateResult {
    return html`<oscd-action-pane
      label="${this.header}"
      icon="functions"
      secondary
      highlighted
      >${renderGeneralEquipment(
        this.element,
        this.editCount,
        this.showfunctions
      )}
      ${renderLNodes(this.element, this.editCount, this.showfunctions)}
      ${renderSubFunctions(this.element, this.editCount, this.showfunctions)}
    </oscd-action-pane>`;
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

export function renderFunctions(
  parent: Element,
  editCount: number,
  showfunctions: boolean
): TemplateResult {
  if (showfunctions) return html``;

  const functions = getChildElementsByTagName(parent, 'Function');
  return html` ${functions.map(
    fUnction =>
      html`<function-editor
        .element=${fUnction}
        .editCount=${editCount}
        ?showfunctions=${showfunctions}
      ></function-editor>`
  )}`;
}
