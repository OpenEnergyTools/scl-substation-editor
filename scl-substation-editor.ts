import { LitElement, html, TemplateResult, css } from 'lit';
import { property } from 'lit/decorators.js';

import './substation/zeroline-pane.js';

/** An editor [[`plugin`]] for editing the `Substation` section. */
export default class SubstationEditorPlugin extends LitElement {
  /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
  @property()
  doc!: XMLDocument;

  @property({ type: Number })
  editCount = -1;

  render(): TemplateResult {
    return html`
      <zeroline-pane
        .editCount=${this.editCount}
        .doc=${this.doc}
      ></zeroline-pane>
    `;
  }

  static styles = css`
    * {
      --oscd-action-pane-theme-surface: var(--oscd-theme-base3);
      --oscd-action-pane-theme-on-surface: var(--oscd-theme-base00);
      --oscd-action-pane-theme-on-primary: var(--oscd-theme-base2);
      --oscd-action-pane-theme-font: 'Roboto';
      --oscd-action-icon-theme-font: 'Roboto';

      --oscd-action-icon-theme-on-surface: var(--oscd-theme-base00);
      --oscd-action-icon-theme-on-primary: var(--oscd-theme-base2);
    }

    :host {
      width: 100vw;
    }
  `;
}
