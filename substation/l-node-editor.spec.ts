/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
import { expect, fixture, html } from '@open-wc/testing';

import { SinonSpy, spy } from 'sinon';

import { isRemove } from '@openscd/open-scd-core';

import { substationDoc } from '../substation.testfiles.js';

import './l-node-editor.js';
import type { LNodeEditor } from './l-node-editor.js';

const lNode = new DOMParser()
  .parseFromString(substationDoc, 'application/xml')
  .querySelector('LNode')!;

describe('Component for SCL element LNode', () => {
  let editor: LNodeEditor;

  let eventSpy: SinonSpy;

  beforeEach(async () => {
    editor = await fixture(
      html`<l-node-editor .element="${lNode}"></l-node-editor>`
    );

    eventSpy = spy();
    window.addEventListener('oscd-edit', eventSpy);
    window.addEventListener('oscd-edit-wizard-request', eventSpy);
  });

  it('sends a wizard edit request', () => {
    editor.editActionable?.click();

    expect(eventSpy).to.have.been.calledOnce;

    const event = eventSpy.args[0][0];
    expect(event.type).to.equal('oscd-edit-wizard-request');
    expect(event.detail.element).to.equal(lNode);
  });

  it('allows to remove an existing LNode element', () => {
    editor.removeActionable?.click();

    expect(eventSpy).to.have.been.calledOnce;

    const event = eventSpy.args[0][0];

    expect(event.type).to.equal('oscd-edit');
    expect(event.detail).to.satisfy(isRemove);
    expect(event.detail.node).to.equal(lNode);
  });
});
