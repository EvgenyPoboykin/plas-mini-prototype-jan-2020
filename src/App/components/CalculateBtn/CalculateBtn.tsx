import React, { memo, useContext } from 'react';
import { Container, Btn, BtnText } from './style';
import { ContextApp } from '../../state';

const CalculateBtn: React.FC = memo(() => {
    const { lang, onClickCalculate } = useContext(ContextApp);
    return (
        <Container>
            <Btn onClick={onClickCalculate}>
                <BtnText>{lang.calculate}</BtnText>
            </Btn>
        </Container>
    );
});
export default CalculateBtn;
