import { LitElement, TemplateResult } from 'lit';
import '@openscd/oscd-action-pane';
/** Pane rendering `EqFunction` element with its children */
export declare class EqFunctionEditor extends LitElement {
    /** The document being edited as provided to editor by [[`Zeroline`]]. */
    doc: XMLDocument;
    editCount: number;
    /** The edited `EqFunction` element */
    element: Element;
    showfunctions: boolean;
    private get header();
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export declare function renderEqFunctions(parent: Element, editCount: number, showfunctions: boolean): TemplateResult;
