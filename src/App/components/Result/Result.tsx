import React, { memo, useContext } from 'react';
import { Container } from './style';
import { ContextApp } from '../../state';

const Result: React.FC = memo(() => {
    const { state, lang } = useContext(ContextApp);
    return (
        <Container>
            {lang.score}: {state.result}
        </Container>
    );
});
export default Result;
