import React, { memo, useContext } from 'react';

import { Container, Content, DragZone, Controls, Control } from './style';
import { ContextApp } from '../../state';

const TopBarControls: React.FC = memo(() => {
    const { CloseApp, MinimizeApp } = useContext(ContextApp);
    return (
        <Container>
            <Content>
                <DragZone></DragZone>
                <Controls>
                    <Control onClick={MinimizeApp} color='#ccc'></Control>
                    <Control onClick={CloseApp} color='#ff2434'></Control>
                </Controls>
            </Content>
        </Container>
    );
});
export default TopBarControls;
