import React from 'react';
import { Container } from './style';
import { Body, TopBarControls } from './components';
import { ProviderApp } from './state';
import App_Logic from './logic';
const App: React.FC = () => {
    const [state, lang, ChangeSwith, ShowFormulas, SelectFormula, ChangeCheckboxMiddle, ChangeInput, onClickCalculate, InputFocus, InputOutFocus, MinimizeApp, CloseApp] = App_Logic();
    return (
        <ProviderApp value={{ state, lang, ChangeSwith, ShowFormulas, SelectFormula, ChangeCheckboxMiddle, ChangeInput, onClickCalculate, InputFocus, InputOutFocus, MinimizeApp, CloseApp }}>
            <Container>
                <TopBarControls />
                <Body />
            </Container>
        </ProviderApp>
    );
};

export default App;
