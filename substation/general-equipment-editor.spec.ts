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

import { renderGeneralEquipment } from './general-equipment-editor.js';

const eqFun = new DOMParser()
  .parseFromString(substationDoc, 'application/xml')
  .querySelector('GeneralEquipment')!;

describe('Component for SCL element GeneralEquipment ', () => {
  describe('with showfunctions = true', () => {
    let editor: HTMLElement;

    let eventSpy: SinonSpy;

    beforeEach(async () => {
      editor = await fixture(
        renderGeneralEquipment(eqFun, { docVersion: 1, showfunctions: true })
      );

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
      expect(event.detail.element).to.equal(eqFun);
    });

    it('sends a wizard create request', () => {
      addActionable(editor).forEach(add => {
        add.click();

        expect(eventSpy).to.have.been.calledOnce;

        const event = eventSpy.args[0][0];
        expect(event.type).to.equal('oscd-create-wizard-request');
        expect(event.detail.parent).to.equal(eqFun);
        expect(event.detail.tagName).to.equal(add.getAttribute('value'));

        eventSpy.resetHistory(); // individual select
      });
    });

    it('allows to remove an existing EqFunction element', () => {
      removeActionable(editor)?.click();

      expect(eventSpy).to.have.been.calledOnce;

      const event = eventSpy.args[0][0];

      expect(event.type).to.equal('oscd-edit-v2');
      expect(event.detail.edit).to.satisfy(isRemove);
      expect(event.detail.edit.node).to.equal(eqFun);
    });
  });

  describe('with showfunctions = false', () => {
    let editor: HTMLElement;

    let eventSpy: SinonSpy;

    beforeEach(async () => {
      editor = await fixture(renderGeneralEquipment(eqFun, { docVersion: 1 }));

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
      expect(event.detail.element).to.equal(eqFun);
    });

    it('allows to remove an existing EqFunction element', () => {
      removeActionable(editor)?.click();

      expect(eventSpy).to.have.been.calledOnce;

      const event = eventSpy.args[0][0];

      expect(event.type).to.equal('oscd-edit-v2');
      expect(event.detail.edit).to.satisfy(isRemove);
      expect(event.detail.edit.node).to.equal(eqFun);
    });
  });
});
