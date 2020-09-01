import React, { memo } from 'react';
import Logo from '../Logo';
import { Container } from './style';
import Checkboxes from '../Checkboxes';

const TopBar: React.FC = memo(() => {
    return (
        <Container>
            <Logo />
            <Checkboxes />
        </Container>
    );
});
export default TopBar;
