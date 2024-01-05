export const substationDoc = `<SCL>
    <Substation name="AA1">
        <Text>This is a text element</Text>
        <Private type="OpenEnergyTools-Test-Private-Type" />
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
            <Text>Hello world</Text>
            <Bay name="Q01" >
                <Text>This is a text element</Text>
                <Private type="OpenEnergyTools-Test-Private-Type" />
                <Function name="func1" >
                    <Text>This is a text element</Text>
                    <Private type="OpenEnergyTools-Test-Private-Type" />
                    <SubFunction name="subFunc1" >
                        <Text>This is a text element</Text>
                        <Private type="OpenEnergyTools-Test-Private-Type" />
                        <LNode iedName="IED1" ldInst="ldInst" lnClass="PTOC" lnInst="1" />
                        <LNode iedName="IED1" ldInst="ldInst" lnClass="PTOC" lnInst="2" />
                        <GeneralEquipment name="genEquip1" desc="desc" />
                            <Text>This is a text element</Text>
                            <Private type="OpenEnergyTools-Test-Private-Type" />
                        <GeneralEquipment name="genEquip2" />
                        <ConductingEquipment name="condEquip1" desc="desc" type="CBR" />
                            <Text>This is a text element</Text>
                            <Private type="OpenEnergyTools-Test-Private-Type" />
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
                <Function name="func2" >
                    <LNode iedName="IED1" ldInst="ldInst" lnClass="PTOC" lnInst="1" />
                    <LNode iedName="IED1" ldInst="ldInst" lnClass="PTOC" lnInst="2" />
                    <GeneralEquipment name="genEquip1" desc="desc" />
                    <GeneralEquipment name="genEquip2" />
                    <ConductingEquipment name="condEquip1" desc="desc" type="CBR" />
                    <ConductingEquipment name="condEquip2" type="DIS" />
                    <SubFunction name="subSubFunc3" />
                    <SubFunction name="subSubFunc4" />
                </Function>
                <ConductingEquipment name="QA1" desc="desc" type="CBR" >
                    <EqFunction name="eqFunc1" desc="desc" type="type">
                        <Text>This is a text element</Text>
                        <Private type="OpenEnergyTools-Test-Private-Type" />
                        <EqSubFunction name="Trip" desc="" >
                            <Text>This is a text element</Text>
                            <Private type="OpenEnergyTools-Test-Private-Type" />
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
                <ConductingEquipment name="QA2" type="CBR" >
                    <LNode iedName="IED1" ldInst="ldInst" lnClass="CSWI" lnInst="1" />
                    <LNode iedName="IED1" ldInst="ldInst" lnClass="CILO" lnInst="1" />
                    <SubEquipment name="phsA" desc="desc" phase="A" >
                        <LNode iedName="IED1" ldInst="ldInst" lnClass="CSWI" lnInst="1" />
                        <LNode iedName="IED1" ldInst="ldInst" lnClass="CILO" lnInst="1" />
                        <EqFunction name="eqFunc7" />
                        <EqFunction name="eqFunc8" />
                    </SubEquipment>
                    <SubEquipment name="phsB" />
                    <SubEquipment name="phsC" />
                    <EqFunction name="eqFunc9" />
                    <EqFunction name="eqFunc10" />
                </ConductingEquipment>
            </Bay>
            <Bay name="PowTrans" >
                <PowerTransformer name="PTR1" type="PTR" >
                    <Text>This is a text element</Text>
                    <Private type="OpenEnergyTools-Test-Private-Type" />
                    <TransformerWinding name="winding1" >
                        <Text>This is a text element</Text>
                        <Private type="OpenEnergyTools-Test-Private-Type" />
                        <TapChanger name="ch1" >
                            <Text>This is a text element</Text>
                            <Private type="OpenEnergyTools-Test-Private-Type" />
                            <LNode iedName="IED1" ldInst="ldInst" lnClass="PTOC" lnInst="1" />
                            <LNode iedName="IED1" ldInst="ldInst" lnClass="PTOC" lnInst="2" />
                            <SubEquipment name="phsA" />
                            <SubEquipment name="phsB" />
                            <SubEquipment name="phsC" />
                            <EqFunction name="eqFunc11" />
                            <EqFunction name="eqFunc12" />
                        </TapChanger>
                        <TapChanger name="ch2" />
                    </TransformerWinding>
                    <TransformerWinding name="winding2" />
                    <TransformerWinding name="winding3" desc="desc" >
                        <LNode iedName="IED1" ldInst="ldInst" lnClass="PTOC" lnInst="1" />
                        <LNode iedName="IED1" ldInst="ldInst" lnClass="PTOC" lnInst="2" />
                        <TapChanger name="ch1" />
                        <TapChanger name="ch2" desc="desc" />
                        <SubEquipment name="phsA" />
                        <SubEquipment name="phsB" />
                        <SubEquipment name="phsC" />
                        <EqFunction name="eqFunc11" />
                        <EqFunction name="eqFunc12" />
                    </TransformerWinding>
                </PowerTransformer>
                <PowerTransformer name="PTR2" type="PTR" />
                <PowerTransformer name="PTR3" desc="desc" type="PTR" >
                    <LNode iedName="IED1" ldInst="ldInst" lnClass="PTOC" lnInst="1" />
                    <LNode iedName="IED1" ldInst="ldInst" lnClass="PTOC" lnInst="2" />
                    <TransformerWinding name="winding1" desc="desc" />
                    <TransformerWinding name="winding1"  />
                    <SubEquipment name="phsA" />
                    <SubEquipment name="phsB" />
                    <SubEquipment name="phsC" />
                    <EqFunction name="eqFunc11" />
                    <EqFunction name="eqFunc12" />
                </PowerTransformer>
            </Bay>
            <Bay name="testBay1" />
            <Bay name="testBay2" desc="desc" >
                <LNode iedName="IED1" ldInst="ldInst" lnClass="PTOC" lnInst="1" />
                <LNode iedName="IED1" ldInst="ldInst" lnClass="PTOC" lnInst="2" />
                <PowerTransformer name="pTrans1" type="PTR" >
                    <TransformerWinding name="wind1" />
                    <TransformerWinding name="wind2" />
                </PowerTransformer>
                <PowerTransformer name="pTrans2" type="PTR" >
                    <TransformerWinding name="wind1" />
                    <TransformerWinding name="wind2" />
                </PowerTransformer>
                <PowerTransformer name="pTrans3" type="PTR" />
                <PowerTransformer name="pTrans4" type="PTR" />
                <GeneralEquipment name="genEquip1" type="ERP" />
                <GeneralEquipment name="genEquip2" type="ERP" />
                <GeneralEquipment name="genEquip3" type="ERP" />
                <GeneralEquipment name="genEquip4" type="ERP" />
                <ConductingEquipment name="condEq1" type="CBR" />
                <ConductingEquipment name="condEq2" type="DIS" />
                <ConductingEquipment name="condEq3" type="DIS" />
                <ConductingEquipment name="condEq4" type="DIS" />
                <ConductingEquipment name="condEq5" type="DIS" />
                <Function name="func1" desc="desc" />
                <Function name="func2" />
            </Bay>
        </VoltageLevel>
        <VoltageLevel name="testVoltLv1" desc="desc" >
            <Voltage unit="V" multiplier="k" >110</Voltage>
        </VoltageLevel>
        <VoltageLevel name="testVoltLv2" >
            <LNode iedName="IED1" ldInst="ldInst" lnClass="PTOC" lnInst="1" />
            <LNode iedName="IED1" ldInst="ldInst" lnClass="PTOC" lnInst="2" />
            <PowerTransformer name="pTrans1" type="PTR" />
            <PowerTransformer name="pTrans2" type="PTR" />
            <GeneralEquipment name="genEquip1" type="ERP" />
            <GeneralEquipment name="genEquip2" type="ERP" />
            <GeneralEquipment name="genEquip3" type="ERP" />
            <GeneralEquipment name="genEquip4" type="ERP" />
            <Bay name="bay1" >
                <ConductingEquipment name="condEq1" type="DIS" />
                <ConductingEquipment name="condEq2" type="DIS" />
                <ConductingEquipment name="condEq3" type="DIS" />
            </Bay>
            <Bay name="bay2" >
                <ConductingEquipment name="condEq1" type="DIS" />
                <ConductingEquipment name="condEq2" type="DIS" />
                <ConductingEquipment name="condEq3" type="DIS" />
            </Bay>
            <Bay name="bay3" >
                <PowerTransformer name="pTrans1" type="PTR" />
                <PowerTransformer name="pTrans2" type="PTR" />
                <ConductingEquipment name="condEq1" type="DIS" />
                <ConductingEquipment name="condEq2" type="DIS" />
                <ConductingEquipment name="condEq3" type="DIS" />
            </Bay>
            <Function name="func1" desc="desc" />
            <Function name="func2" />
        </VoltageLevel>
        <VoltageLevel name="testVoltLv3" >
            <Voltage unit="V" >20000</Voltage>
            <LNode iedName="IED1" ldInst="ldInst" lnClass="PTOC" lnInst="1" />
            <LNode iedName="IED1" ldInst="ldInst" lnClass="PTOC" lnInst="2" />
            <PowerTransformer name="pTrans1" type="PTR" />
            <PowerTransformer name="pTrans2" type="PTR" />
            <GeneralEquipment name="genEquip3" type="ERP" />
            <GeneralEquipment name="genEquip4" type="ERP" />
            <Bay name="bay1" >
                <ConductingEquipment name="condEq1" type="DIS" />
                <ConductingEquipment name="condEq2" type="DIS" />
                <ConductingEquipment name="condEq3" type="DIS" />
            </Bay>
            <Bay name="bay2" >
                <ConductingEquipment name="condEq1" type="DIS" />
                <ConductingEquipment name="condEq2" type="DIS" />
                <ConductingEquipment name="condEq3" type="DIS" />
            </Bay>
            <Function name="func1" desc="desc" type="type" />
            <Function name="func2" />
        </VoltageLevel>
    </Substation>
    <Substation name="testSubst1" />
    <Substation name="testSubst2" desc="desc" >
        <LNode iedName="IED1" ldInst="ldInst" lnClass="PTOC" lnInst="1" />
        <LNode iedName="IED1" ldInst="ldInst" lnClass="PTOC" lnInst="2" />
        <PowerTransformer name="pTrans1" type="PTR" />
        <PowerTransformer name="pTrans2" type="PTR" />
        <GeneralEquipment name="genEquip1" type="ERP" />
        <GeneralEquipment name="genEquip2" type="ERP" />
        <GeneralEquipment name="genEquip3" type="ERP" />
        <VoltageLevel name="voltLv1" >
            <Voltage ></Voltage>
        </VoltageLevel>
        <VoltageLevel name="voltLv2" desc="desc" >
            <Voltage unit="V" multiplier="k" >100</Voltage>
        </VoltageLevel>
        <Function name="func1" desc="desc" type="type" />
        <Function name="func2" />
    </Substation>
    <Line name="testLine1" />
    <Line name="testLine2" desc="desc" >
        <Voltage ></Voltage>
        <LNode iedName="IED1" ldInst="ldInst" lnClass="PTOC" lnInst="1" />
        <LNode iedName="IED1" ldInst="ldInst" lnClass="PTOC" lnInst="2" />
        <GeneralEquipment name="genEquip2" type="ERP" />
        <GeneralEquipment name="genEquip3" type="ERP" />
        <ConductingEquipment name="condEq1" type="DIS" />
        <ConductingEquipment name="condEq2" type="DIS" />
        <ConductingEquipment name="condEq3" type="DIS" />
        <Function name="func1" desc="desc" type="type" />
        <Function name="func2" />
    </Line>
    <Line name="testLine3" desc="desc" >
        <Voltage unit="V" multiplier="k" >20</Voltage>
        <LNode iedName="IED1" ldInst="ldInst" lnClass="PTOC" lnInst="1" />
        <LNode iedName="IED1" ldInst="ldInst" lnClass="PTOC" lnInst="2" />
        <GeneralEquipment name="genEquip2" type="ERP" />
        <GeneralEquipment name="genEquip3" type="ERP" />
        <ConductingEquipment name="condEq1" type="DIS" />
        <ConductingEquipment name="condEq2" type="DIS" />
        <ConductingEquipment name="condEq3" type="DIS" />
        <Function name="func1" desc="desc" type="type" />
        <Function name="func2" />
    </Line>
    <Process name="proc1" />
    <Process name="proc2" desc="desc" >
        <LNode iedName="IED1" ldInst="ldInst" lnClass="PTOC" lnInst="1" />
        <LNode iedName="IED1" ldInst="ldInst" lnClass="PTOC" lnInst="2" />
        <GeneralEquipment name="genEquip2" type="ERP" />
        <GeneralEquipment name="genEquip3" type="ERP" />
        <ConductingEquipment name="condEq1" type="DIS" />
        <ConductingEquipment name="condEq2" type="DIS" />
        <ConductingEquipment name="condEq3" type="DIS" />
        <Line name="line1" />
        <Line name="line2" />
        <Process name="subProc1" />
        <Process name="subProc2" />
        <Substation name="subSt1" />
        <Substation name="subSt1" />
        <Function name="func1" desc="desc" type="type" />
        <Function name="func2" />
    </Process>
</SCL>
`;

export const missingSubstation = `<SCL>
   <Header id="missingSubstation"/>
</SCL>
`;
