import React, { memo, useContext } from 'react';
import { Container } from './style';
import { ContextApp } from '../../state';

const Copyright: React.FC = memo(() => {
    const { lang } = useContext(ContextApp);
    return <Container>{lang.ep} evgenypoboykin@gmail.com</Container>;
});
export default Copyright;
