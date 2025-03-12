/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
import { expect, fixture, html } from '@open-wc/testing';

import { SinonSpy, spy } from 'sinon';

import { isRemove } from '@openenergytools/open-scd-core';

import { substationDoc } from '../substation.testfiles.js';

import { PowerTransformerEditor } from './power-transformer-editor.js';

window.customElements.define(
  'power-transformer-editor',
  PowerTransformerEditor
);

const pTrans = new DOMParser()
  .parseFromString(substationDoc, 'application/xml')
  .querySelector('PowerTransformer')!;

describe('Component for SCL element PowerTransformer', () => {
  let editor: PowerTransformerEditor;

  let eventSpy: SinonSpy;

  beforeEach(async () => {
    editor = await fixture(
      html`<power-transformer-editor
        .element="${pTrans}"
      ></power-transformer-editor>`
    );

    eventSpy = spy();
    window.addEventListener('oscd-edit-v2', eventSpy);
    window.addEventListener('oscd-edit-wizard-request', eventSpy);
    window.addEventListener('oscd-create-wizard-request', eventSpy);
  });

  it('sends a wizard edit request', () => {
    editor.editActionable?.click();

    expect(eventSpy).to.have.been.calledOnce;

    const event = eventSpy.args[0][0];
    expect(event.type).to.equal('oscd-edit-wizard-request');
    expect(event.detail.element).to.equal(pTrans);
  });

  it('sends a wizard create request', () => {
    editor.addActionable?.forEach(add => {
      add.click();

      expect(eventSpy).to.have.been.calledOnce;

      const event = eventSpy.args[0][0];
      expect(event.type).to.equal('oscd-create-wizard-request');
      expect(event.detail.parent).to.equal(pTrans);
      expect(event.detail.tagName).to.equal(add.getAttribute('value'));

      eventSpy.resetHistory(); // individual select
    });
  });

  it('allows to remove an existing PowerTransformer element', () => {
    editor.removeActionable?.click();

    expect(eventSpy).to.have.been.calledOnce;

    const event = eventSpy.args[0][0];

    expect(event.type).to.equal('oscd-edit-v2');
    expect(event.detail.edit).to.satisfy(isRemove);
    expect(event.detail.edit.node).to.equal(pTrans);
  });
});
