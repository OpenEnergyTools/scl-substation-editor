import { html, TemplateResult } from 'lit';

import {
  CloseMenuEvent,
  MdMenu,
} from '@scopedelement/material-web/menu/MdMenu.js';

import { newEditEvent } from '@openenergytools/open-scd-core';
import { getChildren } from '@openenergytools/scl-lib';

import { newCreateWizardEvent, newEditWizardEvent } from '../foundation.js';

export type Prop = {
  docVersion: number;
  showfunctions?: boolean;
  showuserdef?: boolean;
};

export function openEditWizard(
  element: Element,
  dispatcher: HTMLElement
): void {
  dispatcher.dispatchEvent(newEditWizardEvent(element));
}

export function openCreateWizard(
  element: Element,
  dispatcher: HTMLElement,
  tagName: string
): void {
  dispatcher.dispatchEvent(newCreateWizardEvent(element, tagName));
}

export function removeElement(element: Element, dispatcher: HTMLElement): void {
  dispatcher.dispatchEvent(
    newEditEvent({
      node: element,
    })
  );
}

export function renderAddButtons(element: Element): TemplateResult[] {
  const alreadyHasText = element.querySelector(':scope > Text') ?? false;

  return getChildren(element)
    .filter(child => child !== 'Text' || (child === 'Text' && !alreadyHasText))
    .map(
      child =>
        html`<md-menu-item class="action add" value="${child}">
          <div slot="headline">${child}</div>
        </md-menu-item>`
    );
}

export function renderAddButton(element: Element): TemplateResult {
  return html` <abbr slot="action" style="position:relative;">
    <span style="position: relative">
      <md-icon-button
        id="usage-anchor"
        class="action addmenu"
        @click=${(evt: Event) => {
          const addMenu = (evt.target as HTMLElement)
            .nextElementSibling as MdMenu;
          if (addMenu) addMenu.open = true;
        }}
      >
        <md-icon>playlist_add</md-icon>
      </md-icon-button>
      <md-menu
        id="usage-menu"
        anchor="usage-anchor"
        anchor-corner="end-end"
        menu-corner="start-end"
        no-horizontal-flip
        @close-menu="${(evt: CloseMenuEvent) => {
          const tagName = evt.detail.initiator.getAttribute('value');
          const dispatcher = evt.target as HTMLElement;
          if (tagName) openCreateWizard(element, dispatcher, tagName);
        }}"
        >${renderAddButtons(element)}</md-menu
      >
    </span>
  </abbr>`;
}
