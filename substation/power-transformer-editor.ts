/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import '@openscd/oscd-action-icon';
import '@openscd/oscd-action-pane';
import './transformer-winding-editor.js';
import { renderLNodes } from './l-node-editor.js';
import { renderEqFunctions } from './eq-function-editor.js';
import { renderSubEquipments } from './sub-equipment-editor.js';

import {
  getChildElementsByTagName,
  powerTransformerTwoWindingIcon,
  styles,
} from '../foundation.js';

/** [[`SubstationEditor`]] subeditor for a child-less `PowerTransformer` element. */
@customElement('power-transformer-editor')
export class PowerTransformerEditor extends LitElement {
  /** The document being edited as provided to editor by [[`Zeroline`]]. */
  @property({ attribute: false })
  doc!: XMLDocument;

  @property({ type: Number })
  editCount = -1;

  /** SCL element PowerTransformer */
  @property({ attribute: false })
  element!: Element;

  /** PowerTransformer name attribute */
  @property({ type: String })
  get name(): string {
    return this.element.getAttribute('name') ?? 'UNDEFINED';
  }

  /** Whether `EqFunction`, `SubEqFunction` and `SubEquipment` are rendered */
  @property({ type: Boolean })
  showfunctions = false;

  // eslint-disable-next-line class-methods-use-this
  renderContentPane(): TemplateResult {
    return html`<mwc-icon slot="icon" style="width:24px;height:24px"
      >${powerTransformerTwoWindingIcon}</mwc-icon
    > `;
  }

  private renderTransformerWinding(): TemplateResult {
    if (!this.showfunctions) return html``;
    const transformerWindings = getChildElementsByTagName(
      this.element,
      'TransformerWinding'
    );

    return transformerWindings.length
      ? html`<div class="container">
          ${transformerWindings.map(
            transformerWinding =>
              html`<transformer-winding-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${transformerWinding}
                ?showfunctions=${this.showfunctions}
              ></transformer-winding-editor>`
          )}
        </div>`
      : html``;
  }

  // eslint-disable-next-line class-methods-use-this
  renderContentIcon(): TemplateResult {
    return html`<mwc-icon slot="icon"
      >${powerTransformerTwoWindingIcon}</mwc-icon
    > `;
  }

  render(): TemplateResult {
    if (this.showfunctions)
      return html`<oscd-action-pane label="${this.name}">
        ${this.renderContentPane()}
        ${renderLNodes(this.element, this.editCount, this.showfunctions)}
        ${renderEqFunctions(this.element, this.editCount, this.showfunctions)}
        ${renderSubEquipments(this.element, this.editCount, this.showfunctions)}
        ${this.renderTransformerWinding()}
      </oscd-action-pane> `;

    return html`<oscd-action-icon label="${this.name}"
      >${this.renderContentIcon()}</oscd-action-icon
    > `;
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

export function renderPowerTransformerContainer(
  parent: Element,
  editCount: number,
  showfunctions: boolean
): TemplateResult {
  const pwts = getChildElementsByTagName(parent, 'PowerTransformer');
  return pwts?.length
    ? html`<div
        class="${classMap({
          ptrContent: true,
          actionicon: !showfunctions,
        })}"
      >
        ${pwts.map(
          pwt =>
            html`<power-transformer-editor
              .element=${pwt}
              .editCount=${editCount}
              ?showfunctions=${showfunctions}
            ></power-transformer-editor>`
        )}
      </div>`
    : html``;
}
