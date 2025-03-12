/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, html } from 'lit';

import { renderEqSubFunctions } from './eq-sub-function-editor.js';
import { renderGeneralEquipments } from './general-equipment-editor.js';
import { renderLNodes } from './l-node-editor.js';
import { renderText } from './text-editor.js';
import { renderPrivate } from './private-editor.js';

import { getChildElementsByTagName } from '../foundation.js';

import {
  openEditWizard,
  Prop,
  removeElement,
  renderAddButton,
} from './foundation.js';

export function renderEqFunction(element: Element, prop: Prop): TemplateResult {
  function header(): string {
    const name = element.getAttribute('name');
    const desc = element.getAttribute('desc');
    const type = element.getAttribute('type');

    return `${name}${desc ? ` - ${desc}` : ''}${type ? ` (${type})` : ''}`;
  }

  return html`<oscd-action-pane
    label="${header()}"
    icon="functions"
    secondary
    highlighted
  >
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
    ${renderGeneralEquipments(element, prop)}
    ${renderEqSubFunctions(element, prop)}
  </oscd-action-pane>`;
}

export function renderEqFunctions(parent: Element, prop: Prop): TemplateResult {
  const eqFunctions = getChildElementsByTagName(parent, 'EqFunction');
  return html` ${eqFunctions.map(eqFunction =>
    renderEqFunction(eqFunction, prop)
  )}`;
}
