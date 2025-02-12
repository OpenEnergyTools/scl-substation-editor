/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import { getChildElementsByTagName } from '../foundation.js';
import BaseSubstationElementEditor from './base-substation-element-editor.js';

@customElement('text-editor')
export class TextEditor extends BaseSubstationElementEditor {
  @state()
  get header(): string {
    const content = this.element.textContent;

    return `${content}`;
  }

  render(): TemplateResult {
    return html`<oscd-action-pane
      label="${this.header}"
      icon="notes"
      secondary
      highlighted
    >
      <abbr slot="action" title="Edit">
        <md-icon-button
          class="action edit"
          @click=${() => this.openEditWizard()}
          ><md-icon>edit</md-icon></md-icon-button
        >
      </abbr>
      <abbr slot="action" title="Remove">
        <md-icon-button
          class="action remove"
          @click=${() => this.removeElement()}
          ><md-icon>delete</md-icon></md-icon-button
        >
      </abbr>
    </oscd-action-pane>`;
  }

  static styles = css`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
}

export function renderText(
  parent: Element,
  editCount: number,
  showfunctions: boolean,
  showuserdef: boolean
): TemplateResult {
  if (!showfunctions) return html``;
  if (!showuserdef) return html``;

  const text = getChildElementsByTagName(parent, 'Text');
  return html`${text.map(
    fText =>
      html`<text-editor
        .editCount=${editCount}
        .element=${fText}
        ?showfunctions=${showfunctions}
        ?showuserdef=${showuserdef}
      ></text-editor>`
  )}`;
}
