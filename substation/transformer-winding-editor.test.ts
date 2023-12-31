/* eslint-disable import/no-extraneous-dependencies */
import { fixture, html } from '@open-wc/testing';

import { sendMouse, setViewport } from '@web/test-runner-commands';

import { visualDiff } from '@web/test-runner-visual-regression';

import { baseStyle } from './base-visual.js';

import { substationDoc } from '../substation.testfiles.js';

import './transformer-winding-editor.js';
import type { TransformerWindingEditor } from './transformer-winding-editor.js';

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

describe('Component for SCL element SubEquipment ', () => {
  describe('with add menu open', () => {
    let editor: TransformerWindingEditor;
    beforeEach(async () => {
      const subFunc = new DOMParser()
        .parseFromString(substationDoc, 'application/xml')
        .querySelector(`TransformerWinding[name="winding2"]`)!;

      editor = await fixture(
        html`<transformer-winding-editor
          .element=${subFunc}
          ?showfunctions=${true}
        ></transformer-winding-editor>`
      );
      document.body.style.width = '300';
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
      await setViewport({ width: 300, height: 600 });
      await sendMouse({ type: 'click', position: [260, 20] });

      await editor.updateComplete;
      await timeout(600);
      await visualDiff(
        document.body,
        `transformer-winding-editor/#1 add menu visible`
      );
    });
  });

  describe('with showfunction false', () => {
    let editor: TransformerWindingEditor;
    beforeEach(async () => {
      const subFunc = new DOMParser()
        .parseFromString(substationDoc, 'application/xml')
        .querySelector(`TransformerWinding[name="winding3"]`)!;

      editor = await fixture(
        html`<transformer-winding-editor
          .element=${subFunc}
        ></transformer-winding-editor>`
      );
      document.body.style.width = '400';
      document.body.style.height = '800';
      editor.style.position = 'absolute';
      editor.style.top = '20';
      editor.style.left = '20';
      document.body.prepend(editor);
    });

    afterEach(async () => {
      editor.remove();
    });

    it('looks like the latest snapshot', async () => {
      await setViewport({ width: 400, height: 800 });
      await sendMouse({ type: 'click', position: [50, 80] });

      await editor.updateComplete;
      await timeout(600);
      await visualDiff(
        document.body,
        `transformer-winding-editor/#2 Unfocused with showfunction=false`
      );
    });
  });

  describe('with showfunction true', () => {
    let editor: TransformerWindingEditor;
    beforeEach(async () => {
      const lNode = new DOMParser()
        .parseFromString(substationDoc, 'application/xml')
        .querySelector(`TransformerWinding[name="winding3"]`)!;

      editor = await fixture(
        html`<transformer-winding-editor
          .element=${lNode}
          ?showfunctions=${true}
        ></transformer-winding-editor>`
      );
      document.body.style.width = '400';
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
      await setViewport({ width: 400, height: 1000 });

      await sendMouse({ type: 'click', position: [120, 240] });

      await timeout(600);
      await visualDiff(
        document.body,
        `transformer-winding-editor/#3 Focused with showfunction=true`
      );
    });
  });
});
