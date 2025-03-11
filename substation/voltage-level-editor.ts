/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './bay-editor.js';

import { renderFunctions } from './function-editor.js';
import { renderGeneralEquipments } from './general-equipment-editor.js';
import { renderLNodes } from './l-node-editor.js';
import { renderPowerTransformerContainer } from './power-transformer-editor.js';
import { renderText } from './text-editor.js';
import { renderPrivate } from './private-editor.js';

import { getChildElementsByTagName, styles } from '../foundation.js';
import BaseSubstationElementEditor from './base-substation-element-editor.js';

/** [[`Substation`]] subeditor for a `VoltageLevel` element. */
@customElement('voltage-level-editor')
export class VoltageLevelEditor extends BaseSubstationElementEditor {
  @property()
  get voltage(): string | null {
    const V = this.element.querySelector(`VoltageLevel > Voltage`);
    if (V === null) return null;
    const v = V.textContent;
    const m = V.getAttribute('multiplier');
    const u = m === null ? 'V' : ` ${m}V`;
    return v ? v + u : null;
  }

  @property({ type: String })
  get header(): string {
    const name = this.element.getAttribute('name');
    const desc = this.element.getAttribute('desc');

    return `${name} ${desc ? `- ${desc}` : ''}
    ${this.voltage === null ? '' : `(${this.voltage})`}`;
  }

  renderBay(): TemplateResult {
    return html`<div class="container bay">
      ${getChildElementsByTagName(this.element, 'Bay').map(
        bay => html`<bay-editor
          .editCount=${this.editCount}
          .element=${bay}
          ?showfunctions=${this.showfunctions}
          ?showuserdef=${this.showuserdef}
        ></bay-editor>`
      )}
    </div>`;
  }

  render(): TemplateResult {
    return html`<oscd-action-pane label="${this.header}">
      <abbr slot="action" title="Edit">
        <md-icon-button
          class="action edit"
          @click=${() => this.openEditWizard()}
          ><md-icon>edit</md-icon></md-icon-button
        >
      </abbr>
      <abbr slot="action" title="Remove">
        <md-icon-button
          class="action remove"
          @click=${() => this.removeElement()}
          ><md-icon>delete</md-icon></md-icon-button
        >
      </abbr>
      ${this.renderAddButton()}
      ${renderText(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderPrivate(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderLNodes(this.element, this.editCount, this.showfunctions)}
      ${renderGeneralEquipments(this.element, {
        docVersion: this.editCount,
        showfunctions: this.showfunctions,
        showuserdef: this.showuserdef,
      })}
      ${renderPowerTransformerContainer(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${this.renderBay()}
      ${renderFunctions(this.element, {
        docVersion: this.editCount,
        showfunctions: this.showfunctions,
        showuserdef: this.showuserdef,
      })}
    </oscd-action-pane>`;
  }

  static styles = css`
    ${styles}

    .container.bay {
      display: grid;
      grid-gap: 12px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(316px, auto));
    }

    @media (max-width: 387px) {
      .container.bay {
        grid-template-columns: repeat(auto-fit, minmax(196px, auto));
      }
    }
  `;
}
