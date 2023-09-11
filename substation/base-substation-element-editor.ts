import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// eslint-disable-next-line import/no-extraneous-dependencies
import { newEditEvent } from '@openscd/open-scd-core';

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

  removeElement(): void {
    this.dispatchEvent(
      newEditEvent({
        node: this.element,
      })
    );
  }
}
