import { LitElement, TemplateResult } from 'lit';
import '@openscd/oscd-action-pane';
import './voltage-level-editor.js';
/** [[`Substation`]] plugin subeditor for editing `Substation` sections. */
export declare class SubstationEditor extends LitElement {
    /** The document being edited as provided to editor by [[`Zeroline`]]. */
    doc: XMLDocument;
    editCount: number;
    /** The edited `Element`, a common property of all Substation subeditors. */
    element: Element;
    /** Whether `Function` and `SubFunction` are rendered */
    showfunctions: boolean;
    get header(): string;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export declare function renderSubstations(parent: Element, editCount: number, showfunctions: boolean): TemplateResult;
