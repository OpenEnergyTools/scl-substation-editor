/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import '@openscd/oscd-action-pane';
import './conducting-equipment-editor.js';
import './function-editor.js';
import './general-equipment-editor.js';
import './l-node-editor.js';
import './line-editor.js';
import './substation-editor.js';

import { getChildElementsByTagName, styles } from '../foundation.js';

@customElement('process-editor')
export class ProcessEditor extends LitElement {
  /** The document being edited as provided to editor by [[`Zeroline`]]. */
  @property({ attribute: false })
  doc!: XMLDocument;

  @property({ type: Number })
  editCount = -1;

  /** SCL element Process */
  @property({ attribute: false })
  element!: Element;

  /** Whether `Function` and `LNode` are rendered */
  @property({ type: Boolean })
  showfunctions = false;

  @state()
  get header(): string {
    const name = this.element.getAttribute('name') ?? '';
    const desc = this.element.getAttribute('desc');

    return `${name} ${desc ? `—${desc}` : ''}`;
  }

  private renderConductingEquipments(): TemplateResult {
    const ConductingEquipments = getChildElementsByTagName(
      this.element,
      'ConductingEquipment'
    );
    return html` ${ConductingEquipments.map(
      ConductingEquipment =>
        html`<conducting-equipment-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${ConductingEquipment}
          ?showfunctions=${this.showfunctions}
        ></conducting-equipment-editor>`
    )}`;
  }

  private renderGeneralEquipments(): TemplateResult {
    const GeneralEquipments = getChildElementsByTagName(
      this.element,
      'GeneralEquipment'
    );
    return html` ${GeneralEquipments.map(
      GeneralEquipment =>
        html`<general-equipment-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${GeneralEquipment}
          ?showfunctions=${this.showfunctions}
        ></general-equipment-editor>`
    )}`;
  }

  private renderLines(): TemplateResult {
    const Lines = getChildElementsByTagName(this.element, 'Line');
    return html` ${Lines.map(
      Line =>
        html`<line-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${Line}
          ?showfunctions=${this.showfunctions}
        ></line-editor>`
    )}`;
  }

  private renderSubstations(): TemplateResult {
    const Substations = getChildElementsByTagName(this.element, 'Substation');
    return html` ${Substations.map(
      Substation =>
        html`<substation-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${Substation}
          ?showfunctions=${this.showfunctions}
        ></substation-editor>`
    )}`;
  }

  private renderProcesses(): TemplateResult {
    const Processes = getChildElementsByTagName(this.element, 'Process');
    return html` ${Processes.map(
      Process =>
        html`<process-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${Process}
          ?showfunctions=${this.showfunctions}
        ></process-editor>`
    )}`;
  }

  private renderFunctions(): TemplateResult {
    if (!this.showfunctions) return html``;

    const Functions = getChildElementsByTagName(this.element, 'Function');
    return html` ${Functions.map(
      Function =>
        html`<function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${Function}
          ?showfunctions=${this.showfunctions}
        ></function-editor>`
    )}`;
  }

  private renderLNodes(): TemplateResult {
    if (!this.showfunctions) return html``;

    const lNodes = getChildElementsByTagName(this.element, 'LNode');
    return lNodes.length
      ? html`<div class="container lnode">
          ${lNodes.map(
            lNode =>
              html`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${lNode}
              ></l-node-editor>`
          )}
        </div>`
      : html``;
  }

  render(): TemplateResult {
    return html`<oscd-action-pane label=${this.header}>
      ${this.renderConductingEquipments()}${this.renderGeneralEquipments()}${this.renderFunctions()}${this.renderLNodes()}
      ${this.renderLines()} ${this.renderSubstations()}${this.renderProcesses()}
    </oscd-action-pane>`;
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
