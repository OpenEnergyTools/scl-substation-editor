/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@material/mwc-icon-button-toggle';

// import './line-editor.js';
// import './process-editor.js';
import './substation-editor.js';

function shouldShowFunctions(): boolean {
  return localStorage.getItem('showfunctions') === 'on';
}

function setShowFunctions(value: 'on' | 'off') {
  localStorage.setItem('showfunctions', value);
}

/** [[`Zeroline`]] pane for displaying `Substation` and/or `IED` sections. */
@customElement('zeroline-pane')
export class ZerolinePane extends LitElement {
  /** The document being edited as provided to editor by [[`Zeroline`]]. */
  @property({ attribute: false })
  doc!: XMLDocument;

  @property({ type: Number })
  editCount = -1;

  toggleShowFunctions(): void {
    if (shouldShowFunctions()) setShowFunctions('off');
    else setShowFunctions('on');
    this.requestUpdate();
  }

  renderSubstation(): TemplateResult {
    // eslint-disable-next-line no-nested-ternary
    return this.doc?.querySelector(':root > Substation')
      ? html`<section>
          ${Array.from(
            this.doc.querySelectorAll(':root > Substation') ?? []
          ).map(
            substation =>
              html`<substation-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${substation}
                ?showfunctions=${shouldShowFunctions()}
              ></substation-editor>`
          )}
        </section>`
      : !this.doc?.querySelector(':root > Line, :root > Process')
      ? html`<h1>
          <span style="color: var(--oscd-base1)">Substation Missing</span>
        </h1>`
      : html``;
  }

  renderLines(): TemplateResult {
    return this.doc?.querySelector(':root > Line')
      ? html`<section>
          ${Array.from(this.doc.querySelectorAll('Line') ?? []).map(
            line =>
              html`<line-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${line}
                ?showfunctions=${shouldShowFunctions()}
              ></line-editor>`
          )}
        </section>`
      : html``;
  }

  renderProcesses(): TemplateResult {
    return this.doc?.querySelector(':root > Process')
      ? html`<section>
          ${Array.from(this.doc.querySelectorAll(':root > Process') ?? []).map(
            process =>
              html`<process-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${process}
                ?showfunctions=${shouldShowFunctions()}
              ></process-editor>`
          )}
        </section>`
      : html``;
  }

  render(): TemplateResult {
    return html`<h1>
        <nav>
          <abbr title="Show Function Structure">
            <mwc-icon-button-toggle
              ?on=${shouldShowFunctions()}
              @click=${() => this.toggleShowFunctions()}
              id="showfunctions"
              onIcon="layers"
              offIcon="layers_clear"
            ></mwc-icon-button-toggle>
          </abbr>
        </nav>
      </h1>
      ${this.renderSubstation()}${this.renderLines()}${this.renderProcesses()}`;
  }

  static styles = css`
    h1 {
      color: var(--mdc-theme-on-surface);
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 0px;
      line-height: 48px;
      padding-left: 0.3em;
      transition: background-color 150ms linear;
    }

    h1 > nav,
    h1 > abbr > mwc-icon-button {
      float: right;
    }

    section {
      padding: 8px 12px 16px;
      display: grid;
      gap: 12px;
    }

    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
}
