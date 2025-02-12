/* eslint-disable import/no-extraneous-dependencies */
import { TemplateResult, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '@material/mwc-fab';

import { getChildElementsByTagName } from '../foundation.js';
import BaseSubstationElementEditor from './base-substation-element-editor.js';

@customElement('private-editor')
export class PrivateEditor extends BaseSubstationElementEditor {
  @state()
  get header(): string {
    const privateType = this.element.getAttribute('type');

    return `${privateType}`;
  }

  render(): TemplateResult {
    return html`<oscd-action-pane
      label="${this.header}"
      icon="contact_page"
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

export function renderPrivate(
  parent: Element,
  editCount: number,
  showfunctions: boolean,
  showuserdef: boolean
): TemplateResult {
  if (!showfunctions) return html``;
  if (!showuserdef) return html``;

  const privateElement = getChildElementsByTagName(parent, 'Private');
  return html`${privateElement.map(
    fPrivate =>
      html`<private-editor
        .editCount=${editCount}
        .element=${fPrivate}
        ?showfunctions=${showfunctions}
        ?showuserdef=${showuserdef}
      ></text-editor>`
  )}`;
}
