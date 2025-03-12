/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, html } from 'lit';

import { renderLNodes } from './l-node-editor.js';
import { renderEqFunctions } from './eq-function-editor.js';
import { renderText } from './text-editor.js';
import { renderPrivate } from './private-editor.js';

import {
  generalConductingEquipmentIcon,
  getChildElementsByTagName,
} from '../foundation.js';
import {
  openEditWizard,
  Prop,
  removeElement,
  renderAddButton,
} from './foundation.js';

export function renderGeneralEquipment(
  element: Element,
  prop: Prop
): TemplateResult {
  function header(): string {
    const name = element.getAttribute('name');
    const desc = element.getAttribute('desc');

    if (prop.showfunctions === false) return `${name}`;

    return `${name} ${desc ? `—  ${desc}` : ''}`;
  }

  return prop.showfunctions
    ? html`<oscd-action-pane label=${header()}>
        <abbr slot="action" title="Edit">
          <md-icon-buttons
            class="action edit"
            @click=${(evt: Event) =>
              openEditWizard(element, evt.target as HTMLLIElement)}
            ><md-icon>edit</md-icon></md-icon-button
          >
        </abbr>
        <abbr slot="action" title="Remove">
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
        ${renderEqFunctions(element, prop)}
      </oscd-action-pane>`
    : html`<oscd-action-icon label=${header()}>
        <md-icon slot="icon">${generalConductingEquipmentIcon}</md-icon>
        <md-filled-icon-button
          class="action edit"
          slot="action"
          mini
          @click=${(evt: Event) =>
            openEditWizard(element, evt.target as HTMLLIElement)}
          ><md-icon>edit</md-icon></md-filled-icon-button
        >
        <md-filled-icon-button
          class="action remove"
          slot="action"
          mini
          @click=${(evt: Event) =>
            removeElement(element, evt.target as HTMLElement)}
          ><md-icon>delete</md-icon></md-filled-icon-button
        >
      </oscd-action-icon>`;
}

export function renderGeneralEquipments(
  parent: Element,
  prop: Prop
): TemplateResult {
  const generalEquipments = getChildElementsByTagName(
    parent,
    'GeneralEquipment'
  );
  return html`${generalEquipments.map(generalEquipment =>
    renderGeneralEquipment(generalEquipment, prop)
  )}`;
}
