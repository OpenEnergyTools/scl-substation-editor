import { LitElement, TemplateResult } from 'lit';
import '@openscd/oscd-action-pane';
export declare class LineEditor extends LitElement {
    /** The document being edited as provided to editor by [[`Zeroline`]]. */
    doc: XMLDocument;
    editCount: number;
    /** SCL element Line */
    element: Element;
    /** Whether `Function` and `LNode` are rendered */
    showfunctions: boolean;
    get header(): string;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export declare function renderLines(parent: Element, editCount: number, showfunctions: boolean): TemplateResult;
