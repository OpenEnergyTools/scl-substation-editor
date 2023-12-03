export const substationDoc = `<SCL>
    <Substation name="AA1">
        <LNode iedName="IED1" ldInst="ldInst" prefix="prefix" lnClass="Lxxx" lnInst="1" />
        <LNode iedName="IED1" ldInst="ldInst" prefix="prefix" lnClass="Axxx" lnInst="1" />
        <LNode iedName="IED1" ldInst="ldInst" prefix="prefix" lnClass="Cxxx" lnInst="1" />
        <LNode iedName="IED1" ldInst="ldInst" prefix="prefix" lnClass="Fxxx" lnInst="1" />
        <LNode iedName="IED1" ldInst="ldInst" prefix="prefix" lnClass="Gxxx" lnInst="1" />
        <LNode iedName="IED1" ldInst="ldInst" prefix="prefix" lnClass="Ixxx" lnInst="1" />
        <LNode iedName="IED1" ldInst="ldInst" prefix="prefix" lnClass="Kxxx" lnInst="1" />
        <LNode iedName="IED1" ldInst="ldInst" lnClass="Mxxx" lnInst="1" />
        <LNode iedName="IED1" ldInst="ldInst" prefix="prefix" lnClass="Pxxx" lnInst="1" />
        <LNode iedName="IED1" ldInst="ldInst" prefix="prefix" lnClass="Qxxx" lnInst="1" />
        <LNode iedName="IED1" ldInst="ldInst" prefix="prefix" lnClass="Rxxx" lnInst="1" />
        <LNode iedName="IED1" ldInst="ldInst" prefix="prefix" lnClass="Sxxx" lnInst="1" />
        <LNode iedName="IED1" ldInst="ldInst" prefix="prefix" lnClass="Txxx" lnInst="1" />
        <LNode iedName="IED1" ldInst="ldInst" prefix="prefix" lnClass="Xxxx" lnInst="1" />
        <LNode iedName="IED1" ldInst="ldInst" prefix="prefix" lnClass="Yxxx" lnInst="1" />
        <LNode iedName="None" lnClass="Zxxx" lnInst="1" />
        <LNode iedName="IED1" ldInst="ldInst" prefix="prefix" lnInst="1" />
        <LNode iedName="IED1" ldInst="ldInst" prefix="prefix" lnClass="PTOC" lnInst="1" />
        <VoltageLevel name="E1" >
            <Bay name="Q01" >
                <Function name="func1" >
                    <SubFunction name="subFunc1" >
                        <LNode iedName="IED1" ldInst="ldInst" lnClass="PTOC" lnInst="1" />
                        <LNode iedName="IED1" ldInst="ldInst" lnClass="PTOC" lnInst="2" />
                        <GeneralEquipment name="genEquip1" desc="desc" />
                        <GeneralEquipment name="genEquip2" />
                        <ConductingEquipment name="condEquip1" desc="desc" type="CBR" />
                        <ConductingEquipment name="condEquip2" type="DIS" />
                        <SubFunction name="subSubFunc1" desc="desc" type="type" >
                            <LNode iedName="IED1" ldInst="ldInst" lnClass="PTOC" lnInst="1" />
                            <LNode iedName="IED1" ldInst="ldInst" lnClass="PTOC" lnInst="2" />
                        </SubFunction>
                        <SubFunction name="subSubFunc2" >
                            <LNode iedName="IED1" ldInst="ldInst" lnClass="PTOC" lnInst="1" />
                            <LNode iedName="IED1" ldInst="ldInst" lnClass="PTOC" lnInst="2" />
                        </SubFunction>
                    </SubFunction>
                </Function>
                <ConductingEquipment name="QA1" desc="desc" type="CBR" >
                    <EqFunction name="eqFunc1" desc="desc" type="type">
                        <EqSubFunction name="Trip" desc="" >
                            <LNode iedName="IED1" ldInst="ldInst" lnClass="XCBR" lnInst="1" />
                            <LNode iedName="IED1" ldInst="ldInst" lnClass="PTOC" lnInst="1" />
                            <GeneralEquipment name="someGenEquipment1" desc="desc" >
                            </GeneralEquipment>
                            <GeneralEquipment name="someGenEquipment2" >
                            </GeneralEquipment>
                            <EqSubFunction name="tripA" desc="desc" >
                            </EqSubFunction>
                            <EqSubFunction name="tripB" type="type" desc="desc" >
                            </EqSubFunction>
                            <EqSubFunction name="tripC" type="type" >
                            </EqSubFunction>
                        </EqSubFunction>
                        <EqSubFunction name="Start" >
                        </EqSubFunction>
                    </EqFunction>
                </ConductingEquipment>
                <ConductingEquipment name="Qb1" type="DIS" >
                    <EqFunction name="eqFunc2" >
                        <LNode iedName="IED1" ldInst="ldInst" lnClass="CSWI" lnInst="1" />
                        <LNode iedName="IED1" ldInst="ldInst" lnClass="CILO" lnInst="1" />
                        <GeneralEquipment name="someGenEquipment1" desc="desc" />
                        <GeneralEquipment name="someGenEquipment2" />
                        <EqSubFunction name="interlock" desc="desc" />
                        <EqSubFunction name="control" type="type" desc="desc" />
                    </EqFunction>
                </ConductingEquipment>
            </Bay>
            <Bay name="Q02" >
                <GeneralEquipment name="someGenEquip1" desc="desc" >
                </GeneralEquipment>
                <GeneralEquipment name="someGenEquip2" >
                    <LNode iedName="IED1" ldInst="ldInst" lnClass="PTOC" lnInst="1" />
                    <LNode iedName="IED1" ldInst="ldInst" lnClass="PTOC" lnInst="2" />
                    <EqFunction name="eqFunc1" desc="desc" />
                    <EqFunction name="eqFunc2" type="type" desc="desc" />
                </GeneralEquipment>
            </Bay>
        </VoltageLevel>
    </Substation>
</SCL>
`;
