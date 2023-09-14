/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import '@material/mwc-fab';
import '@material/mwc-icon-button';
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
import BaseSubstationElementEditor from './base-substation-element-editor.js';

/** [[`SubstationEditor`]] subeditor for a child-less `PowerTransformer` element. */
@customElement('power-transformer-editor')
export class PowerTransformerEditor extends BaseSubstationElementEditor {
  /** PowerTransformer name attribute */
  @property({ type: String })
  get name(): string {
    return this.element.getAttribute('name') ?? 'UNDEFINED';
  }

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
                .element=${transformerWinding}
                .editCount=${this.editCount}
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
      ><mwc-fab
        slot="action"
        mini
        icon="edit"
        @click="${() => this.openEditWizard()}"
      ></mwc-fab>
      <mwc-fab
        slot="action"
        mini
        icon="delete"
        @click="${() => this.removeElement()}"
      ></mwc-fab> `;
  }

  render(): TemplateResult {
    if (this.showfunctions)
      return html`<oscd-action-pane label="${this.name}">
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
        ${this.renderAddButton()} ${this.renderContentPane()}
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
