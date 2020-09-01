import React, { memo, useContext } from 'react';
import { ContextApp } from '../../state';
import TopBar from '../TopBar';

import { Container, Bg } from './style';
import FormulaList from '../FormulaList';
import FormulaSelector from '../FormulaSelector';
import Equipped from '../Equipped';
import Gender from '../Gender';
import Input from '../Input';
import CalculateBtn from '../CalculateBtn';
import Copyright from '../Copyright';
import Result from '../Result';

const Body: React.FC = memo(() => {
    const { lang } = useContext(ContextApp);
    return (
        <Container>
            <FormulaList />
            <TopBar />
            <FormulaSelector />
            <Equipped />
            <Gender />
            <Input field='age' fieldName={lang.age} />
            <Input field='selfWeight' fieldName={lang.self_weight} />
            <Input field='totalWeight' fieldName={lang.total_weight} />
            <CalculateBtn />
            <Result />
            <Copyright />
            <Bg />
        </Container>
    );
});
export default Body;
