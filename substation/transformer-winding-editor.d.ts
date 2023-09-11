import { LitElement, TemplateResult } from 'lit';
import '@openscd/oscd-action-icon';
import '@openscd/oscd-action-pane';
import './tapchanger-editor.js';
export declare class TransformerWindingEditor extends LitElement {
    /** The document being edited as provided to editor by [[`Zeroline`]]. */
    doc: XMLDocument;
    editCount: number;
    /** SCL element TransformerWinding */
    element: Element;
    /** Whether `EqFunction` elements are rendered */
    showfunctions: boolean;
    /** TransformerWinding name attribute */
    get label(): string;
    private renderTapChanger;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
