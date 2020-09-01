import React, { memo } from 'react';
import Checkbox from '../Checkbox';
import { Container } from './style';

const Checkboxes: React.FC = memo(() => {
    return (
        <Container>
            <Checkbox title='En' />
            <Checkbox title='Lbs' />
        </Container>
    );
});
export default Checkboxes;
