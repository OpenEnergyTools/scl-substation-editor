/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@openscd/oscd-action-icon';
import '@openscd/oscd-action-pane';
import { renderLNodes } from './l-node-editor.js';
import { renderEqFunctions } from './eq-function-editor.js';
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

  render(): TemplateResult {
    return html`<oscd-action-pane label="${this.label}">
      ${renderLNodes(this.element, this.editCount, false)}
      ${renderEqFunctions(this.element, this.editCount, true)}
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

export function renderSubEquipments(
  parent: Element,
  editCount: number,
  showfunctions: boolean
): TemplateResult {
  if (!showfunctions) return html``;
  const subEquipments = getChildElementsByTagName(parent, 'SubEquipment');

  return html` ${subEquipments.map(
    subEquipment =>
      html`<sub-equipment-editor
        .editCount=${editCount}
        .element=${subEquipment}
      ></sub-equipment-editor>`
  )}`;
}
