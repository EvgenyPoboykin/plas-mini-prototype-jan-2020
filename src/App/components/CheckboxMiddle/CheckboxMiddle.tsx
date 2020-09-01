import React, { memo, useContext } from 'react';
import { Container, Content, TitleE, TitleNE, Switch, Check, Slider } from './style';
import { ContextApp } from '../../state';

interface ICheckboxMiddle {
    firstTitle: string;
    secondTitle: string;
    field: string;
    block: boolean;
}

const CheckboxMiddle: React.FC<ICheckboxMiddle> = memo(({ firstTitle, secondTitle, field, block }) => {
    const { state, ChangeCheckboxMiddle } = useContext(ContextApp);
    return (
        <Container block={block}>
            <Content>
                <TitleE inputValue={state[field]}>{firstTitle}</TitleE>
                <Switch>
                    <Check id={field} defaultChecked={state[field]} inputValue={state[field]} onClick={() => ChangeCheckboxMiddle(field, state[field])} />
                    <Slider block={block} htmlFor={field} inputValue={state[field]}></Slider>
                </Switch>
                <TitleNE inputValue={state[field]}>{secondTitle}</TitleNE>
            </Content>
        </Container>
    );
});
export default CheckboxMiddle;
