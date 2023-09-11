import { LitElement, TemplateResult } from 'lit';
import '@openscd/oscd-action-pane';
import './sub-function-editor.js';
/** Pane rendering `SubFunction` element with its children */
export declare class SubFunctionEditor extends LitElement {
    /** The document being edited as provided to editor by [[`Zeroline`]]. */
    doc: XMLDocument;
    editCount: number;
    /** The edited `SubFunction` element */
    element: Element;
    showfunctions: boolean;
    private get header();
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export declare function renderSubFunctions(parent: Element, editCount: number, showfunctions: boolean): TemplateResult;
