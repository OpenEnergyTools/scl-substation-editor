import { LitElement, TemplateResult } from 'lit';
import '@openscd/oscd-action-pane';
export declare class GeneralEquipmentEditor extends LitElement {
    editCount: number;
    element: Element;
    /** Whether `Function` and `SubFunction` are rendered */
    showfunctions: boolean;
    get header(): string;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export declare function renderGeneralEquipment(parent: Element, editCount: number, showfunctions: boolean): TemplateResult;
