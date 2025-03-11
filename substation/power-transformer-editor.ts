/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './transformer-winding-editor.js';

import { renderLNodes } from './l-node-editor.js';
import { renderEqFunctions } from './eq-function-editor.js';
import { renderSubEquipments } from './sub-equipment-editor.js';
import { renderText } from './text-editor.js';
import { renderPrivate } from './private-editor.js';

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
    return `${this.element.getAttribute('name')}`;
  }

  // eslint-disable-next-line class-methods-use-this
  renderContentPane(): TemplateResult {
    return html`<md-icon slot="icon" style="width:24px;height:24px"
      >${powerTransformerTwoWindingIcon}</md-icon
    > `;
  }

  private renderTransformerWinding(): TemplateResult {
    const transformerWindings = getChildElementsByTagName(
      this.element,
      'TransformerWinding'
    );

    return html`${transformerWindings.map(
      transformerWinding =>
        html`<transformer-winding-editor
          .element=${transformerWinding}
          .editCount=${this.editCount}
          ?showfunctions=${this.showfunctions}
          ?showuserdef=${this.showuserdef}
        ></transformer-winding-editor>`
    )}`;
  }

  // eslint-disable-next-line class-methods-use-this
  renderContentIcon(): TemplateResult {
    return html`<md-icon slot="icon"
        >${powerTransformerTwoWindingIcon}</mwc-icon
      ><md-filled-icon-button
        class="action edit"
        slot="action"
        mini
        @click="${() => this.openEditWizard()}"
      ><md-icon>edit</md-icon></md-filled-icon-button>
      <md-filled-icon-button
        class="action remove"
        slot="action"
        mini
        @click="${() => this.removeElement()}"
      ><md-icon>delete</md-icon></md-filled-icon-button> `;
  }

  render(): TemplateResult {
    if (this.showfunctions)
      return html`<oscd-action-pane label="${this.name}">
        <abbr slot="action" title="Edit">
          <md-icon-button
            class="action edit"
            @click=${() => this.openEditWizard()}
            ><md-icon>edit</md-icon></md-icon-button
          >
        </abbr>
        <abbr slot="action" title="Remove">
          <md-icon-button
            class="action edit"
            @click=${() => this.removeElement()}
            ><md-icon>delete</md-icon></md-icon-button
          >
        </abbr>
        ${this.renderAddButton()} ${this.renderContentPane()}
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
        ${this.renderTransformerWinding()}
        ${renderEqFunctions(this.element, {
          docVersion: this.editCount,
          showuserdef: this.showuserdef,
        })}
        ${renderSubEquipments(
          this.element,
          this.editCount,
          this.showfunctions,
          this.showuserdef
        )}
      </oscd-action-pane> `;

    return html`<oscd-action-icon label="${this.name}"
      >${this.renderContentIcon()}</oscd-action-icon
    > `;
  }

  static styles = css`
    ${styles}

    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
}

export function renderPowerTransformerContainer(
  parent: Element,
  editCount: number,
  showfunctions: boolean,
  showuserdef: boolean
): TemplateResult {
  const pTrans = getChildElementsByTagName(parent, 'PowerTransformer');

  if (showfunctions)
    return html`${pTrans.map(
      ptr =>
        html`<power-transformer-editor
          .element=${ptr}
          .editCount=${editCount}
          ?showfunctions=${showfunctions}
          ?showuserdef=${showuserdef}
        ></power-transformer-editor>`
    )}`;

  return pTrans.length
    ? html`<div class="content actionicon">
        ${pTrans.map(
          pwt =>
            html`<power-transformer-editor
              .element=${pwt}
              .editCount=${editCount}
              ?showfunctions=${showfunctions}
              ?showuserdef=${showuserdef}
            ></power-transformer-editor>`
        )}
      </div>`
    : html``;
}
