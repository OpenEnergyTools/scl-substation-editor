/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
import { expect, fixture, html } from '@open-wc/testing';

import { SinonSpy, spy } from 'sinon';

import { isRemove } from '@openscd/open-scd-core';

import { substationDoc } from '../substation.testfiles.js';

import './private-editor.js';
import type { PrivateEditor } from './private-editor.js';

const eqFun = new DOMParser()
  .parseFromString(substationDoc, 'application/xml')
  .querySelector('Private')!;

describe('Component for SCL element Private ', () => {
  describe('with showfunctions = true', () => {
    let editor: PrivateEditor;

    let eventSpy: SinonSpy;

    beforeEach(async () => {
      editor = await fixture(
        html`<private-editor
          .element="${eqFun}"
          ?showfunctions=${true}
          ?showuserdef=${true}
        ></private-editor>`
      );

      eventSpy = spy();
      window.addEventListener('oscd-edit', eventSpy);
      window.addEventListener('oscd-edit-wizard-request', eventSpy);
      window.addEventListener('oscd-create-wizard-request', eventSpy);
    });

    it('sends a wizard edit request', () => {
      editor.editActionable?.click();

      expect(eventSpy).to.have.been.calledOnce;

      const event = eventSpy.args[0][0];
      expect(event.type).to.equal('oscd-edit-wizard-request');
      expect(event.detail.element).to.equal(eqFun);
    });

    it('sends a wizard create request', () => {
      editor.addActionable?.forEach(add => {
        add.click();

        expect(eventSpy).to.have.been.calledOnce;

        const event = eventSpy.args[0][0];
        expect(event.type).to.equal('oscd-create-wizard-request');
        expect(event.detail.parent).to.equal(eqFun);
        expect(event.detail.tagName).to.equal(add.value);

        eventSpy.resetHistory(); // individual select
      });
    });

    it('allows to remove an existing Private element', () => {
      editor.removeActionable?.click();

      expect(eventSpy).to.have.been.calledOnce;

      const event = eventSpy.args[0][0];

      expect(event.type).to.equal('oscd-edit');
      expect(event.detail).to.satisfy(isRemove);
      expect(event.detail.node).to.equal(eqFun);
    });
  });

  describe('with showfunctions = false', () => {
    let editor: PrivateEditor;

    let eventSpy: SinonSpy;

    beforeEach(async () => {
      editor = await fixture(
        html`<private-editor .element="${eqFun}"></private-editor>`
      );

      eventSpy = spy();
      window.addEventListener('oscd-edit', eventSpy);
      window.addEventListener('oscd-edit-wizard-request', eventSpy);
      window.addEventListener('oscd-create-wizard-request', eventSpy);
    });

    it('sends a wizard edit request', () => {
      editor.editActionable?.click();

      expect(eventSpy).to.have.been.calledOnce;

      const event = eventSpy.args[0][0];
      expect(event.type).to.equal('oscd-edit-wizard-request');
      expect(event.detail.element).to.equal(eqFun);
    });

    it('allows to remove an existing EqFunction element', () => {
      editor.removeActionable?.click();

      expect(eventSpy).to.have.been.calledOnce;

      const event = eventSpy.args[0][0];

      expect(event.type).to.equal('oscd-edit');
      expect(event.detail).to.satisfy(isRemove);
      expect(event.detail.node).to.equal(eqFun);
    });
  });
});
