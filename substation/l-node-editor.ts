/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, html } from 'lit';
import { state } from 'lit/decorators.js';

import { OscdActionIcon } from '@openenergytools/oscd-action-icon';
import { MdFilledIconButton } from '@scopedelement/material-web/iconbutton/MdFilledIconButton.js';
import { MdMenu } from '@scopedelement/material-web/menu/MdMenu.js';
import { MdMenuItem } from '@scopedelement/material-web/menu/MdMenuItem.js';
import { MdIconButton } from '@scopedelement/material-web/iconbutton/MdIconButton.js';
import { MdIcon } from '@scopedelement/material-web/icon/MdIcon.js';

import {
  automationLogicalNode,
  controlLogicalNode,
  functionalLogicalNode,
  furtherPowerSystemEquipmentLogicalNode,
  generalLogicalNode,
  interfacingLogicalNode,
  measurementLogicalNode,
  nonElectricalLogicalNode,
  powerTransformerLogicalNode,
  protectionLogicalNode,
  protectionRelatedLogicalNode,
  qualityLogicalNode,
  supervisionLogicalNode,
  switchgearLogicalNode,
  systemLogicalNode,
  transformerLogicalNode,
} from './lnode.js';

import { getChildElementsByTagName } from '../foundation.js';
import BaseSubstationElementEditor from './base-substation-element-editor.js';

const lnClassIcons: Partial<Record<string, TemplateResult>> = {
  L: systemLogicalNode,
  A: automationLogicalNode,
  C: controlLogicalNode,
  F: functionalLogicalNode,
  G: generalLogicalNode,
  I: interfacingLogicalNode,
  K: nonElectricalLogicalNode,
  M: measurementLogicalNode,
  P: protectionLogicalNode,
  Q: qualityLogicalNode,
  R: protectionRelatedLogicalNode,
  S: supervisionLogicalNode,
  T: transformerLogicalNode,
  X: switchgearLogicalNode,
  Y: powerTransformerLogicalNode,
  Z: furtherPowerSystemEquipmentLogicalNode,
};

export function getLNodeIcon(lNode: Element): TemplateResult {
  const lnClassGroup = lNode.getAttribute('lnClass')?.charAt(0) ?? '';
  return lnClassIcons[lnClassGroup] ?? systemLogicalNode;
}

/** Pane rendering `LNode` element with its children */
export class LNodeEditor extends BaseSubstationElementEditor {
  static scopedElements = {
    'oscd-action-icon': OscdActionIcon,
    'md-filled-icon-button': MdFilledIconButton,
    'md-menu': MdMenu,
    'md-menu-item': MdMenuItem,
    'md-icon-button': MdIconButton,
    'md-icon': MdIcon,
  };

  @state()
  private get header(): string {
    const prefix = this.element.getAttribute('prefix') ?? '';
    const lnClass = this.element.getAttribute('lnClass');
    const lnInst = this.element.getAttribute('lnInst');

    return `${prefix} ${lnClass} ${lnInst}`;
  }

  @state()
  private get missingIedReference(): boolean {
    return this.element.getAttribute('iedName') === 'None';
  }

  render(): TemplateResult {
    return html`<oscd-action-icon
      label="${this.header}"
      ?secondary=${this.missingIedReference}
      ?highlighted=${this.missingIedReference}
      ><md-icon slot="icon">${getLNodeIcon(this.element)}</md-icon>
      <md-filled-icon-button
        class="action edit"
        slot="action"
        mini
        @click="${() => this.openEditWizard()}"
        ><md-icon>edit</md-icon></md-filled-icon-button
      >
      <md-filled-icon-button
        class="action remove"
        slot="action"
        mini
        @click="${() => this.removeElement()}"
        ><md-icon>delete</md-icon></md-filled-icon-button
      >
    </oscd-action-icon>`;
  }
}

export function renderLNodes(
  parent: Element,
  editCount: number,
  showfunctions: boolean
): TemplateResult {
  if (!showfunctions) return html``;

  const lNodes = getChildElementsByTagName(parent, 'LNode');

  return lNodes.length
    ? html`<div class="container lnode">
        ${lNodes.map(
          lNode =>
            html`<l-node-editor
              .editCount=${editCount}
              .element=${lNode}
            ></l-node-editor>`
        )}
      </div>`
    : html``;
}
