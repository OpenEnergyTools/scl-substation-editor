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
    :host {
      width: 100vw;

      --oscd-action-pane-theme-surface: var();
    }
  `;
}
