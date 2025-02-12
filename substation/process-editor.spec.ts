/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
import { expect, fixture, html } from '@open-wc/testing';

import { SinonSpy, spy } from 'sinon';

import { isRemove } from '@openenergytools/open-scd-core';

import { substationDoc } from '../substation.testfiles.js';

import './process-editor.js';
import type { ProcessEditor } from './process-editor.js';

const proc = new DOMParser()
  .parseFromString(substationDoc, 'application/xml')
  .querySelector('Process')!;

describe('Component for SCL element Process', () => {
  let editor: ProcessEditor;

  let eventSpy: SinonSpy;

  beforeEach(async () => {
    editor = await fixture(
      html`<process-editor .element="${proc}"></process-editor>`
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
    expect(event.detail.element).to.equal(proc);
  });

  it('sends a wizard create request', () => {
    editor.addActionable?.forEach(add => {
      add.click();

      expect(eventSpy).to.have.been.calledOnce;

      const event = eventSpy.args[0][0];
      expect(event.type).to.equal('oscd-create-wizard-request');
      expect(event.detail.parent).to.equal(proc);
      expect(event.detail.tagName).to.equal(add.getAttribute('value'));

      eventSpy.resetHistory(); // individual select
    });
  });

  it('allows to remove an existing Line element', () => {
    editor.removeActionable?.click();

    expect(eventSpy).to.have.been.calledOnce;

    const event = eventSpy.args[0][0];

    expect(event.type).to.equal('oscd-edit-v2');
    expect(event.detail.edit).to.satisfy(isRemove);
    expect(event.detail.edit.node).to.equal(proc);
  });
});
