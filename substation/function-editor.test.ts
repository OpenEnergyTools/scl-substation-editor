/* eslint-disable import/no-extraneous-dependencies */
import { fixture } from '@open-wc/testing';

import { sendMouse, setViewport } from '@web/test-runner-commands';

import { visualDiff } from '@web/test-runner-visual-regression';

import { OscdActionPane } from '@openenergytools/oscd-action-pane';

import { baseStyle } from './base-visual.js';

import { substationDoc } from '../substation.testfiles.js';

import './test-utils.js';
import { renderFunction } from './function-editor.js';

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

describe('Component for SCL element Function ', () => {
  describe('with add menu open', () => {
    let editor: HTMLElement;
    beforeEach(async () => {
      const func = new DOMParser()
        .parseFromString(substationDoc, 'application/xml')
        .querySelector(`Function[name="func1"]`)!;

      editor = await fixture(renderFunction(func, { docVersion: 1 }));
      document.body.style.width = '400';
      document.body.style.height = '400';
      editor.style.position = 'absolute';
      editor.style.top = '10';
      editor.style.left = '10';
      document.body.prepend(editor);
    });

    afterEach(async () => {
      editor.remove();
    });

    it('looks like the latest snapshot', async () => {
      await setViewport({ width: 400, height: 400 });
      await sendMouse({ type: 'click', position: [380, 30] });

      await timeout(800);
      await visualDiff(document.body, `function-editor/#1 add menu visible`);
    });
  });

  describe('with showfunction false', () => {
    let editor: HTMLElement;
    beforeEach(async () => {
      const func = new DOMParser()
        .parseFromString(substationDoc, 'application/xml')
        .querySelector(`Function[name="func2"]`)!;

      editor = await fixture(renderFunction(func, { docVersion: 1 }));
      document.body.style.width = '600';
      document.body.style.height = '600';
      editor.style.position = 'absolute';
      editor.style.top = '20';
      editor.style.left = '20';
      document.body.prepend(editor);
    });

    afterEach(async () => {
      editor.remove();
    });

    it('looks like the latest snapshot', async () => {
      await setViewport({ width: 600, height: 600 });
      await sendMouse({ type: 'click', position: [50, 80] });

      await timeout(800);
      await visualDiff(
        document.body,
        `function-editor/#2 Unfocused with showfunction=false`
      );
    });
  });

  describe('with showfunction true', () => {
    let editor: HTMLElement;
    beforeEach(async () => {
      const func = new DOMParser()
        .parseFromString(substationDoc, 'application/xml')
        .querySelector(`Function[name="func2"]`)!;

      editor = await fixture(
        renderFunction(func, { docVersion: 1, showfunctions: true })
      );
      document.body.style.width = '600';
      document.body.style.height = '1000';
      editor.style.position = 'absolute';
      editor.style.top = '20';
      editor.style.left = '20';
      document.body.prepend(editor);
    });

    afterEach(async () => {
      editor.remove();
    });

    it('looks like the latest snapshot', async () => {
      await setViewport({ width: 600, height: 1000 });

      await sendMouse({ type: 'click', position: [120, 120] });

      await timeout(800);
      await visualDiff(
        document.body,
        `function-editor/#3 Focused with showfunction=true`
      );
    });
  });
});
