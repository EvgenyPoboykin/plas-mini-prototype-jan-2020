import React, { memo } from 'react';
import { Container, InputField, Label, Error } from './style';
import Input_Logic from './logic';

interface IInput {
    field: string;
    fieldName: string;
}

const Input: React.FC<IInput> = memo(({ field, fieldName }) => {
    const [state, show, InputBlock, InputFocus, TabKeyDown, EnterOnKeyPress, ChangeInput] = Input_Logic(field);

    return (
        <Container id={field} block={InputBlock()}>
            <Label id={field}>{fieldName}</Label>
            <InputField block={InputBlock()} id={field} defaultValue={state[field]} onKeyPress={(e) => EnterOnKeyPress(e, field, e.currentTarget?.value)} onKeyDown={(e) => TabKeyDown(e, field, e.currentTarget?.value)} onChange={(e) => ChangeInput(field, e.target.value)} onFocus={InputFocus} />
            {show === field ? <Error id={field}>!</Error> : null}
        </Container>
    );
});
export default Input;
