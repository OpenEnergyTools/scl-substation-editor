/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@openscd/oscd-action-pane';
import './voltage-level-editor.js';
import { renderFunctions } from './function-editor.js';
import { renderGeneralEquipment } from './general-equipment-editor.js';
import { renderLNodes } from './l-node-editor.js';
import { renderPowerTransformerContainer } from './power-transformer-editor.js';

import { getChildElementsByTagName, styles } from '../foundation.js';

/** [[`Substation`]] plugin subeditor for editing `Substation` sections. */
@customElement('substation-editor')
export class SubstationEditor extends LitElement {
  /** The document being edited as provided to editor by [[`Zeroline`]]. */
  @property({ attribute: false })
  doc!: XMLDocument;

  @property({ type: Number })
  editCount = -1;

  /** The edited `Element`, a common property of all Substation subeditors. */
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
      ${renderPowerTransformerContainer(
        this.element,
        this.editCount,
        this.showfunctions
      )}
      ${Array.from(this.element.querySelectorAll('VoltageLevel')).map(
        voltageLevel =>
          html`<voltage-level-editor
            .editCount=${this.editCount}
            .doc=${this.doc}
            .element=${voltageLevel}
            ?showfunctions=${this.showfunctions}
          ></voltage-level-editor>`
      )}</oscd-action-pane
    >`;
  }

  static styles = css`
    ${styles}
  `;
}

export function renderSubstations(
  parent: Element,
  editCount: number,
  showfunctions: boolean
): TemplateResult {
  const Substations = getChildElementsByTagName(parent, 'Substation');
  return html` ${Substations.map(
    Substation =>
      html`<substation-editor
        .element=${Substation}
        .editCount=${editCount}
        ?showfunctions=${showfunctions}
      ></substation-editor>`
  )}`;
}
