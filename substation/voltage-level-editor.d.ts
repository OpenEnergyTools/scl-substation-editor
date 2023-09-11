import { LitElement, TemplateResult } from 'lit';
import '@openscd/oscd-action-pane';
import './bay-editor.js';
/** [[`Substation`]] subeditor for a `VoltageLevel` element. */
export declare class VoltageLevelEditor extends LitElement {
    /** The document being edited as provided to editor by [[`Zeroline`]]. */
    doc: XMLDocument;
    editCount: number;
    element: Element;
    /** Whether `Function` and `SubFunction` are rendered */
    showfunctions: boolean;
    get voltage(): string | null;
    get header(): string;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
