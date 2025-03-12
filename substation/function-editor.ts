/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, html } from 'lit';

import { renderConductingEquipments } from './conducting-equipment-editor.js';
import { renderGeneralEquipments } from './general-equipment-editor.js';
import { renderLNodes } from './l-node-editor.js';
import { renderSubFunctions } from './sub-function-editor.js';
import { renderText } from './text-editor.js';
import { renderPrivate } from './private-editor.js';

import { getChildElementsByTagName } from '../foundation.js';
import {
  openEditWizard,
  Prop,
  removeElement,
  renderAddButton,
} from './foundation.js';

export function renderFunction(element: Element, prop: Prop): TemplateResult {
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
    ${renderConductingEquipments(
      element,
      prop.docVersion,
      prop.showfunctions!,
      prop.showuserdef!
    )}
    ${renderSubFunctions(element, prop)}
  </oscd-action-pane>`;
}

export function renderFunctions(parent: Element, prop: Prop): TemplateResult {
  if (prop.showfunctions === false) return html``;

  const functions = getChildElementsByTagName(parent, 'Function');
  return html` ${functions.map(fUnction => renderFunction(fUnction, prop))}`;
}
