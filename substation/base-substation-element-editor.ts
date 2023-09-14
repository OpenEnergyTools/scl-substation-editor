/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, TemplateResult, html } from 'lit';
import { property, query } from 'lit/decorators.js';

import { newEditEvent } from '@openscd/open-scd-core';
import { getChildren } from '@openenergytools/scl-lib';

import '@material/mwc-icon-button';
import type { IconButton } from '@material/mwc-icon-button';
import type { ListItem } from '@material/mwc-list/mwc-list-item';
import type { Menu } from '@material/mwc-menu';

import { newCreateWizardEvent, newEditWizardEvent } from '../foundation.js';

function childTags(element: Element | null | undefined): string[] {
  if (!element) return [];
  return getChildren(element);
}

/** base class hosting global properties and the remove method */
export default class BaseSubstationElementEditor extends LitElement {
  /** The edited `Function` element */
  @property({ attribute: false })
  element!: Element;

  /** indicator for changes element */
  @property({ type: Number })
  editCount = -1;

  /** Whether function type element shall be shown */
  @property({ type: Boolean })
  showfunctions = false;

  @query('mwc-menu') addMenu!: Menu;

  @query('mwc-icon-button[icon="playlist_add"]') addButton!: IconButton;

  private openCreateWizard(tagName: string): void {
    this.dispatchEvent(newCreateWizardEvent(this.element, tagName));
  }

  openEditWizard(): void {
    this.dispatchEvent(newEditWizardEvent(this.element));
  }

  removeElement(): void {
    this.dispatchEvent(
      newEditEvent({
        node: this.element,
      })
    );
  }

  updated(): void {
    this.addMenu.anchor = <HTMLElement>this.addButton;
  }

  private renderAddButtons(): TemplateResult[] {
    return childTags(this.element).map(
      child =>
        html`<mwc-list-item value="${child}"
          ><span>${child}</span></mwc-list-item
        >`
    );
  }

  renderAddButton(): TemplateResult {
    return html` <abbr slot="action" style="position:relative;">
      <mwc-icon-button
        icon="playlist_add"
        @click=${() => {
          this.addMenu.open = true;
        }}
      ></mwc-icon-button
      ><mwc-menu
        corner="BOTTOM_RIGHT"
        menuCorner="END"
        @action=${(e: Event) => {
          const tagName = (<ListItem>(<Menu>e.target).selected).value;
          this.openCreateWizard(tagName);
        }}
        >${this.renderAddButtons()}</mwc-menu
      >
    </abbr>`;
  }
}
