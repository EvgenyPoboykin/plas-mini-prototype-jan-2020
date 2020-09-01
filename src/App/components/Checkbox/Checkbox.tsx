import React, { memo, useContext } from 'react';
import { Container, Switch, Check, Slider, Title } from './style';
import { ContextApp } from '../../state';

interface ICheckbox {
    title: string;
}

const Checkbox: React.FC<ICheckbox> = memo(({ title }) => {
    const { state, ChangeSwith } = useContext(ContextApp);
    const titleLowerCase = title.toLowerCase();
    const check = state[title.toLowerCase()];
    return (
        <Container>
            <Title inputValue={check}>{title}</Title>
            <Switch>
                <Check id={titleLowerCase} defaultChecked={check} inputValue={check} onClick={() => ChangeSwith(titleLowerCase, check)} />
                <Slider htmlFor={titleLowerCase} inputValue={check}></Slider>
            </Switch>
        </Container>
    );
});
export default Checkbox;
