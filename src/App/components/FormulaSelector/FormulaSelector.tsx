import React, { memo, useContext } from 'react';
import { ContextApp } from '../../state';
import { Container, ContainerBtn, Content } from './style';

const FormulaSelector: React.FC = memo(() => {
    const { state, ShowFormulas } = useContext(ContextApp);
    return (
        <Container>
            <ContainerBtn onClick={ShowFormulas}>
                <Content>{state.selectFormula}</Content>
            </ContainerBtn>
        </Container>
    );
});
export default FormulaSelector;
