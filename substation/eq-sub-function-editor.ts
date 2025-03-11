/* eslint-disable no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import { renderGeneralEquipment } from './general-equipment-editor.js';
import { renderLNodes } from './l-node-editor.js';
import { renderText } from './text-editor.js';
import { renderPrivate } from './private-editor.js';

import { getChildElementsByTagName } from '../foundation.js';
import BaseSubstationElementEditor from './base-substation-element-editor.js';

import {
  openEditWizard,
  Prop,
  removeElement,
  renderAddButton,
} from './foundation.js';

/** Pane rendering `EqSubFunction` element with its children */
@customElement('eq-sub-function-editor')
export class EqSubFunctionEditor extends BaseSubstationElementEditor {
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
      <abbr slot="action" title="Edit">
        <md-icon-button
          class="action edit"
          @click=${() => this.openEditWizard()}
          ><md-icon>edit</md-icon></md-icon-button
        > </abbr
      ><abbr slot="action" title="Remove">
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
      ${renderGeneralEquipment(
        this.element,
        this.editCount,
        this.showfunctions,
        this.showuserdef
      )}
      ${renderEqSubFunctions(this.element, {
        docVersion: this.editCount,
        showfunctions: this.showfunctions,
      })}
    </oscd-action-pane>`;
  }

  static styles = css`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    .content.actionicon {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
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

function renderEqSubFunction(element: Element, prop: Prop): TemplateResult {
  function header(): string {
    const name = element.getAttribute('name');
    const desc = element.getAttribute('desc');
    const type = element.getAttribute('type');

    return `${name}${desc ? ` - ${desc}` : ''}${type ? ` (${type})` : ''}`;
  }

  return html`
    <oscd-action-pane label="${header()}" icon="functions" secondary>
      <abbr slot="action" title="Edit">
        <md-icon-button
          class="action edit"
          @click=${(evt: Event) =>
            openEditWizard(element, evt.target as HTMLLIElement)}
          ><md-icon>edit</md-icon></md-icon-button
        > </abbr
      ><abbr slot="action" title="Remove">
        <md-icon-button
          class="action remove"
          @click=${(evt: Event) =>
            removeElement(element, evt.target as HTMLElement)}
          ><md-icon>delete</md-icon></md-icon-button
        >
      </abbr>
      ${renderAddButton(element)}
      ${renderText(
        element,
        prop.docVersion,
        prop.showfunctions!,
        prop.showuserdef!
      )}
      ${renderPrivate(
        element,
        prop.docVersion,
        prop.showfunctions!,
        prop.showuserdef!
      )}
      ${renderLNodes(element, prop.docVersion, prop.showfunctions!)}
      ${renderGeneralEquipment(
        element,
        prop.docVersion,
        prop.showfunctions!,
        prop.showuserdef!
      )}
      ${renderEqSubFunctions(element, prop)}
    </oscd-action-pane>
  `;
}

export function renderEqSubFunctions(
  parent: Element,
  prop: Prop
): TemplateResult {
  const eqSubFunctions = getChildElementsByTagName(parent, 'EqSubFunction');
  return html` ${eqSubFunctions.map(eqSubFunction =>
    renderEqSubFunction(eqSubFunction, prop)
  )}`;
}
