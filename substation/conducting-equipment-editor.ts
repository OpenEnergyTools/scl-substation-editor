/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@openscd/oscd-action-icon';
import '@openscd/oscd-action-pane';
import { renderLNodes } from './l-node-editor.js';
import { renderEqFunctions } from './eq-function-editor.js';

import { getChildElementsByTagName, getIcon, styles } from '../foundation.js';
import { renderSubEquipments } from './sub-equipment-editor.js';

/** [[`SubstationEditor`]] subeditor for a `ConductingEquipment` element. */
@customElement('conducting-equipment-editor')
export class ConductingEquipmentEditor extends LitElement {
  /** The document being edited as provided to editor by [[`Zeroline`]]. */
  @property({ attribute: false })
  doc!: XMLDocument;

  @property({ type: Number })
  editCount = -1;

  /** SCL element ConductingEquipment */
  @property({ attribute: false })
  element!: Element;

  /** ConductingEquipment name attribute */
  @property({ type: String })
  get name(): string {
    return this.element.getAttribute('name') ?? '';
  }

  /** Whether `EqFunction`, `SubEqFunction` and `SubEquipment` are rendered */
  @property({ type: Boolean })
  showfunctions = false;

  renderContentPane(): TemplateResult {
    return html`<mwc-icon slot="icon" style="width:24px;height:24px"
      >${getIcon(this.element)}</mwc-icon
    > `;
  }

  renderContentIcon(): TemplateResult {
    return html`<mwc-icon slot="icon">${getIcon(this.element)}</mwc-icon> `;
  }

  render(): TemplateResult {
    if (this.showfunctions)
      return html`<oscd-action-pane label="${this.name}"
        >${this.renderContentPane()}
        ${renderLNodes(this.element, this.editCount, this.showfunctions)}
        ${renderEqFunctions(this.element, this.editCount, this.showfunctions)}
        ${renderSubEquipments(this.element, this.editCount, this.showfunctions)}
        </oscd-action-pane
        ></oscd-action-pane
      >`;

    return html`<oscd-action-icon label="${this.name}"
      >${this.renderContentIcon()}</oscd-action-icon
    >`;
  }

  static styles = css`
    ${styles}

    :host(.moving) {
      opacity: 0.3;
    }

    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
}

export function renderConductingEquipments(
  parent: Element,
  editCount: number,
  showfunctions: boolean
): TemplateResult {
  const ConductingEquipments = getChildElementsByTagName(
    parent,
    'ConductingEquipment'
  );
  return html` ${ConductingEquipments.map(
    ConductingEquipment =>
      html`<conducting-equipment-editor
        .element=${ConductingEquipment}
        .editCount=${editCount}
        ?showfunctions=${showfunctions}
      ></conducting-equipment-editor>`
  )}`;
}
