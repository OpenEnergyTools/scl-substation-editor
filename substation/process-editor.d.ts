import { LitElement, TemplateResult } from 'lit';
import '@openscd/oscd-action-pane';
export declare class ProcessEditor extends LitElement {
    /** The document being edited as provided to editor by [[`Zeroline`]]. */
    doc: XMLDocument;
    editCount: number;
    /** SCL element Process */
    element: Element;
    /** Whether `Function` and `LNode` are rendered */
    showfunctions: boolean;
    get header(): string;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export declare function renderProcesses(parent: Element, editCount: number, showfunctions: boolean): TemplateResult;
