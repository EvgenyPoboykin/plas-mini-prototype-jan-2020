import React, { memo } from 'react';
import { Container, Logotype } from './style';

const Logo: React.FC = memo(() => {
    return (
        <Container>
            <Logotype />
        </Container>
    );
});
export default Logo;
