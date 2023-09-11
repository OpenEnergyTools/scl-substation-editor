/* eslint-disable no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import '@openscd/oscd-action-pane';

import { renderGeneralEquipment } from './general-equipment-editor.js';
import { renderLNodes } from './l-node-editor.js';

import { getChildElementsByTagName } from '../foundation.js';

/** Pane rendering `EqSubFunction` element with its children */
@customElement('eq-sub-function-editor')
export class EqSubFunctionEditor extends LitElement {
  /** The document being edited as provided to editor by [[`Zeroline`]]. */
  @property({ attribute: false })
  doc!: XMLDocument;

  @property({ type: Number })
  editCount = -1;

  /** The edited `EqSubFunction` element */
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
    >
      ${renderGeneralEquipment(
        this.element,
        this.editCount,
        this.showfunctions
      )}
      ${renderLNodes(this.element, this.editCount, this.showfunctions)}
      ${renderEqSubFunctions(this.element, this.editCount, this.showfunctions)}
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

export function renderEqSubFunctions(
  parent: Element,
  editCount: number,
  showfunctions: boolean
): TemplateResult {
  const eqSubFunctions = getChildElementsByTagName(parent, 'EqSubFunction');
  return html` ${eqSubFunctions.map(
    eqSubFunction =>
      html`<eq-sub-function-editor
        .element=${eqSubFunction}
        .editCount=${editCount}
        ?showfunctions=${showfunctions}
      ></eq-sub-function-editor>`
  )}`;
}
