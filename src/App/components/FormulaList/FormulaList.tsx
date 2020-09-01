import React, { memo, useContext } from 'react';

import { Container, ContentBG, Title, FormulaBtn } from './style';
import { ContextApp } from '../../state';

const formula = [
    { id: 1, name: 'IPF Classic' },
    { id: 2, name: 'IPF Classic Bench' },
    { id: 3, name: 'Wilks' },
    { id: 4, name: 'Glossbrenner' },
    { id: 5, name: 'Reshel' },
    { id: 6, name: 'Schwartz-Malone' },
];

const FormulaList: React.FC = memo(() => {
    const { state, lang, SelectFormula } = useContext(ContextApp);
    return (
        <Container showFormulas={state.showFormulas}>
            <Title>{lang.selectFormula}</Title>

            {formula &&
                formula.map((item) => (
                    <FormulaBtn key={item.id} onClick={() => SelectFormula(item.name)}>
                        {item.name}
                    </FormulaBtn>
                ))}
            <ContentBG></ContentBG>
        </Container>
    );
});
export default FormulaList;
