/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, TemplateResult, html } from 'lit';
import { property, query, queryAll } from 'lit/decorators.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';

import { MdIcon } from '@scopedelement/material-web/icon/MdIcon.js';
import { MdIconButton } from '@scopedelement/material-web/iconbutton/MdIconButton.js';
import { MdMenuItem } from '@scopedelement/material-web/menu/MdMenuItem.js';
import { MdMenu } from '@scopedelement/material-web/menu/MdMenu.js';

import { newEditEvent } from '@openenergytools/open-scd-core';
import { getChildren } from '@openenergytools/scl-lib';

import { newCreateWizardEvent, newEditWizardEvent } from '../foundation.js';

/** base class hosting global properties and the remove method */
export default class BaseSubstationElementEditor extends ScopedElementsMixin(
  LitElement
) {
  static scopedElements = {
    'md-menu': MdMenu,
    'md-menu-item': MdMenuItem,
    'md-icon-button': MdIconButton,
    'md-icon': MdIcon,
  };

  /** The edited `Function` element */
  @property({ attribute: false })
  element!: Element;

  /** indicator for changes element */
  @property({ type: Number })
  editCount = -1;

  /** Whether function type element shall be shown */
  @property({ type: Boolean })
  showfunctions = false;

  /** Whether text/private type element shall be shown */
  @property({ type: Boolean })
  showuserdef = false;

  @query('md-menu') addMenu?: MdMenu;

  @query('md-icon-button[icon="playlist_add"]') addButton!: MdIconButton;

  @query('.action.remove') removeActionable?: HTMLElement;

  @query('.action.edit') editActionable?: HTMLElement;

  @query('.action.addmenu') addMenuActionable?: HTMLElement;

  @queryAll('.action.add') addActionable?: MdMenuItem[];

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

  private renderAddButtons(): TemplateResult[] {
    const alreadyHasText = this.element.querySelector(':scope > Text') ?? false;

    return getChildren(this.element)
      .filter(
        child => child !== 'Text' || (child === 'Text' && !alreadyHasText)
      )
      .map(
        child =>
          html`<md-menu-item
            class="action add"
            value="${child}"
            @click="${() => this.openCreateWizard(child)}"
          >
            <div slot="headline">${child}</div>
          </md-menu-item>`
      );
  }

  renderAddButton(): TemplateResult {
    return html` <abbr slot="action" style="position:relative;">
      <span style="position: relative">
        <md-icon-button
          id="usage-anchor"
          class="action addmenu"
          @click=${() => {
            if (this.addMenu) this.addMenu.open = true;
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
          >${this.renderAddButtons()}</md-menu
        >
      </span>
    </abbr>`;
  }
}
