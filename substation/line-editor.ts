/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import { renderConductingEquipments } from './conducting-equipment-editor.js';
import { renderFunctions } from './function-editor.js';
import { renderGeneralEquipments } from './general-equipment-editor.js';
import { renderLNodes } from './l-node-editor.js';
import { renderText } from './text-editor.js';
import { renderPrivate } from './private-editor.js';

import { getChildElementsByTagName, styles } from '../foundation.js';
import BaseSubstationElementEditor from './base-substation-element-editor.js';

@customElement('line-editor')
export class LineEditor extends BaseSubstationElementEditor {
  get voltage(): string | null {
    const V = this.element.querySelector(`:scope > Voltage`);
    if (V === null) return null;
    const v = V.textContent;
    const m = V.getAttribute('multiplier');
    const u = m === null ? 'V' : ` ${m}V`;
    return v ? v + u : null;
  }

  @state()
  get header(): string {
    const name = this.element.getAttribute('name');
    const desc = this.element.getAttribute('desc');
    const volt = this.voltage;

    return `${name} ${desc ? `- ${desc}` : ''} ${
      volt === null ? '' : `(${volt})`
    }`;
  }

  render(): TemplateResult {
    return html`<oscd-action-pane label=${this.header}>
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
      ${renderConductingEquipments(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderGeneralEquipments(this.element, {
        docVersion: this.editCount,
        showfunctions: this.showfunctions,
        showuserdef: this.showuserdef,
      })}
      ${renderFunctions(this.element, {
        docVersion: this.editCount,
        showfunctions: this.showfunctions,
        showuserdef: this.showuserdef,
      })}
    </oscd-action-pane>`;
  }

  static styles = css`
    ${styles}
  `;
}

export function renderLines(
  parent: Element,
  editCount: number,
  showfunctions: boolean,
  showuserdef: boolean
): TemplateResult {
  const lines = getChildElementsByTagName(parent, 'Line');

  return html` ${lines.map(
    Line =>
      html`<line-editor
        .element=${Line}
        .editCount=${editCount}
        ?showfunctions=${showfunctions}
        ?showuserdef=${showuserdef}
      ></line-editor>`
  )}`;
}
