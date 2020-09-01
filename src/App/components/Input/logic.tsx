import { useContext, useState, useEffect } from 'react';
import { ContextApp } from '../../state';

const Input_Logic = (field: string) => {
    const { state, ChangeInput, InputFocus, InputOutFocus } = useContext(ContextApp);
    const [show, UseShow] = useState<string>('');

    const InputBlock = () => {
        if (state.selectFormula === 'Reshel' || state.selectFormula === 'Schwartz-Malone') {
            if (field === 'age') {
                return false;
            }

            return false;
        } else {
            if (field === 'age') {
                return true;
            }
            return false;
        }
    };

    useEffect(() => {
        for (let i = 0; i < state.messages.length; i++) {
            if (state.messages[i] === field) {
                UseShow(state.messages[i]);
            }
        }

        setTimeout(() => {
            UseShow('');
        }, 2000);
    }, [state.messages, field]);

    const TabKeyDown = (e: React.KeyboardEvent, field: string, inputValue: string) => {
        if (e.key === 'Tab') {
            ChangeInput(field, inputValue);
            InputOutFocus();
        }
    };
    const EnterOnKeyPress = (e: React.KeyboardEvent, field: string, inputValue: string) => {
        if (e.key === 'Enter') {
            ChangeInput(field, inputValue);
            InputOutFocus();
        }
    };

    return [state, show, InputBlock, InputFocus, TabKeyDown, EnterOnKeyPress, ChangeInput];
};

export default Input_Logic;
