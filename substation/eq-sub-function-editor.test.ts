/* eslint-disable import/no-extraneous-dependencies */
import { fixture } from '@open-wc/testing';

import { sendMouse, setViewport } from '@web/test-runner-commands';

import { visualDiff } from '@web/test-runner-visual-regression';

import { OscdActionPane } from '@openenergytools/oscd-action-pane';

import { substationDoc } from '../substation.testfiles.js';

import { baseStyle } from './base-visual.js';

import './test-utils.js';
import { renderEqSubFunction } from './eq-sub-function-editor.js';

if (!window.customElements.get('oscd-action-pane'))
  window.customElements.define('oscd-action-pane', OscdActionPane);

const factor = window.process && process.env.CI ? 4 : 2;
function timeout(ms: number) {
  return new Promise(res => {
    setTimeout(res, ms * factor);
  });
}
mocha.timeout(2000 * factor);

const style = document.createElement('style');
style.textContent = baseStyle;
document.body.prepend(style);

describe('Component for SCL element EqSubFunction ', () => {
  describe('with add menu open', () => {
    let editor: HTMLElement;
    beforeEach(async () => {
      const subFunc = new DOMParser()
        .parseFromString(substationDoc, 'application/xml')
        .querySelector(`EqSubFunction`)!;

      editor = await fixture(renderEqSubFunction(subFunc, { docVersion: 1 }));
      document.body.style.width = '800';
      document.body.style.height = '900';
      document.body.prepend(editor);
    });

    afterEach(async () => {
      editor.remove();
    });

    it('looks like the latest snapshot', async () => {
      await setViewport({ width: 800, height: 900 });
      await sendMouse({ type: 'click', position: [780, 20] });

      await timeout(400);
      await visualDiff(
        document.body,
        `eq-sub-function-editor/#1 add menu visible`
      );
    });
  });

  describe('with showfunction false', () => {
    let editor: HTMLElement;
    beforeEach(async () => {
      const subFunc = new DOMParser()
        .parseFromString(substationDoc, 'application/xml')
        .querySelector(`EqSubFunction`)!;

      editor = await fixture(renderEqSubFunction(subFunc, { docVersion: 1 }));
      document.body.style.width = '800';
      document.body.style.height = '900';
      document.body.prepend(editor);
    });

    afterEach(async () => {
      editor.remove();
    });

    it('looks like the latest snapshot', async () => {
      await setViewport({ width: 800, height: 900 });
      await sendMouse({ type: 'click', position: [30, 30] });

      await timeout(400);
      await visualDiff(
        document.body,
        `eq-sub-function-editor/#2 Unfocused with showfunction=false`
      );
    });
  });

  describe('with showfunction true', () => {
    let editor: HTMLElement;
    beforeEach(async () => {
      const subFunc = new DOMParser()
        .parseFromString(substationDoc, 'application/xml')
        .querySelector(`EqSubFunction`)!;

      editor = await fixture(
        renderEqSubFunction(subFunc, { docVersion: 1, showfunctions: true })
      );
      document.body.style.width = '800';
      document.body.style.height = '900';
      document.body.prepend(editor);
    });

    afterEach(async () => {
      editor.remove();
    });

    it('looks like the latest snapshot', async () => {
      await setViewport({ width: 800, height: 900 });

      await sendMouse({ type: 'click', position: [120, 120] });

      await timeout(200);
      await visualDiff(
        document.body,
        `eq-sub-function-editor/#3 Focused with showfunction=true`
      );
    });
  });
});
