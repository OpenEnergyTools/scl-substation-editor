/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
import { expect, fixture } from '@open-wc/testing';

import { SinonSpy, spy } from 'sinon';

import { isRemove } from '@openenergytools/open-scd-core';

import { substationDoc } from '../substation.testfiles.js';

import {
  addActionable,
  editActionable,
  removeActionable,
} from './test-utils.js';

import { renderSubFunction } from './sub-function-editor.js';

const subFunc = new DOMParser()
  .parseFromString(substationDoc, 'application/xml')
  .querySelector('SubFunction')!;

describe('Component for SCL element SubFunction', () => {
  let editor: HTMLElement;

  let eventSpy: SinonSpy;

  beforeEach(async () => {
    editor = await fixture(renderSubFunction(subFunc, { docVersion: 1 }));

    eventSpy = spy();
    window.addEventListener('oscd-edit-v2', eventSpy);
    window.addEventListener('oscd-edit-wizard-request', eventSpy);
    window.addEventListener('oscd-create-wizard-request', eventSpy);
  });

  it('sends a wizard edit request', () => {
    editActionable(editor)?.click();

    expect(eventSpy).to.have.been.calledOnce;

    const event = eventSpy.args[0][0];
    expect(event.type).to.equal('oscd-edit-wizard-request');
    expect(event.detail.element).to.equal(subFunc);
  });

  it('sends a wizard create request', () => {
    addActionable(editor).forEach(add => {
      add.click();

      expect(eventSpy).to.have.been.calledOnce;

      const event = eventSpy.args[0][0];
      expect(event.type).to.equal('oscd-create-wizard-request');
      expect(event.detail.parent).to.equal(subFunc);
      expect(event.detail.tagName).to.equal(add.getAttribute('value'));

      eventSpy.resetHistory(); // individual select
    });
  });

  it('allows to remove an existing SubFunction element', () => {
    removeActionable(editor)?.click();

    expect(eventSpy).to.have.been.calledOnce;

    const event = eventSpy.args[0][0];

    expect(event.type).to.equal('oscd-edit-v2');
    expect(event.detail.edit).to.satisfy(isRemove);
    expect(event.detail.edit.node).to.equal(subFunc);
  });
});
