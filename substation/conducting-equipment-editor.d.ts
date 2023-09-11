import { LitElement, TemplateResult } from 'lit';
import '@openscd/oscd-action-icon';
import '@openscd/oscd-action-pane';
/** [[`SubstationEditor`]] subeditor for a `ConductingEquipment` element. */
export declare class ConductingEquipmentEditor extends LitElement {
    /** The document being edited as provided to editor by [[`Zeroline`]]. */
    doc: XMLDocument;
    editCount: number;
    /** SCL element ConductingEquipment */
    element: Element;
    /** ConductingEquipment name attribute */
    get name(): string;
    /** Whether `EqFunction`, `SubEqFunction` and `SubEquipment` are rendered */
    showfunctions: boolean;
    renderContentPane(): TemplateResult;
    renderContentIcon(): TemplateResult;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export declare function renderConductingEquipments(parent: Element, editCount: number, showfunctions: boolean): TemplateResult;
