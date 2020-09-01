import { useState, useEffect, useCallback } from 'react';
import { initialState, En, Ru } from './state';
import { ValidateSelfWeight, FormulaResult } from './func';

const { ipcRenderer } = window.require('electron');

const App_Logic = () => {
    // Logic ${name} START
    const [state, UseState] = useState(initialState);
    const [lang, UseLang] = useState<any>(En);

    const MinimizeApp = () => {
        ipcRenderer.send('minimize');
    };

    const CloseApp = () => {
        ipcRenderer.send('close');
    };

    const ChangeSwith = (fieldName: string, prevStateField: boolean) => {
        UseState((prev) => ({ ...prev, [fieldName]: !prevStateField }));
        if (fieldName === 'en') {
            if (prevStateField) {
                UseLang(Ru);
            } else {
                UseLang(En);
            }
        }
    };

    const ShowFormulas = () => {
        UseState((prev) => ({ ...prev, showFormulas: !prev.showFormulas }));
    };

    const SelectFormula = (name: string) => {
        UseState((prev) => ({ ...prev, selectFormula: name, showFormulas: false }));
    };

    const ChangeCheckboxMiddle = (fieldName: string, prevStateField: boolean) => {
        UseState((prev) => ({ ...prev, [fieldName]: !prevStateField }));
    };

    const ChangeInput = (fieldName: string, inputValue: string) => {
        let value: string = ValidateSelfWeight(inputValue);
        UseState((prev) => ({ ...prev, [fieldName]: parseFloat(value) }));
    };

    const KeyPressEscFormulas = (e: React.KeyboardEvent<Element>) => {
        if (e.keyCode === 27) {
            UseState((prev) => ({ ...prev, showFormulas: false }));
        }
    };

    const CleanMassages = useCallback(() => {
        UseState((prev) => ({ ...prev, messages: [] }));
    }, [UseState]);

    const InputFocus = () => {
        UseState((prev) => ({ ...prev, inputFocus: true }));
    };

    const InputOutFocus = () => {
        UseState((prev) => ({ ...prev, inputFocus: false }));
    };

    const onClickCalculate = useCallback(() => {
        CleanMassages();

        if (state.selectFormula === 'Reshel' || state.selectFormula === 'Schwartz-Malone') {
            let newList: any[] = [
                { value: state.age, name: 'age' },
                { value: state.selfWeight, name: 'selfWeight' },
                { value: state.totalWeight, name: 'totalWeight' },
            ];

            if (state.age === 0 || state.selfWeight === 0 || state.totalWeight === 0) {
                newList.filter((item) => {
                    if (item.value === 0) {
                        return UseState((prev) => ({ ...prev, messages: [...prev.messages, item.name] }));
                    }

                    return null;
                });
            } else {
                let Result: number = FormulaResult(state.lbs, state.selectFormula, state.equipped, state.gender, state.age, state.selfWeight, state.totalWeight);
                return UseState((prev) => ({ ...prev, result: Result }));
            }
        } else {
            let newList: any[] = [
                { value: state.selfWeight, name: 'selfWeight' },
                { value: state.totalWeight, name: 'totalWeight' },
            ];
            if (state.selfWeight === 0 || state.totalWeight === 0) {
                newList.filter((item) => {
                    if (item.value === 0) {
                        return UseState((prev) => ({ ...prev, messages: [...prev.messages, item.name] }));
                    }

                    return null;
                });
            } else {
                let Result: number = FormulaResult(state.lbs, state.selectFormula, state.equipped, state.gender, state.age, state.selfWeight, state.totalWeight);
                return UseState((prev) => ({ ...prev, result: Result }));
            }
        }
    }, [state, CleanMassages]);

    useEffect(() => {
        document.addEventListener('keydown', () => KeyPressEscFormulas, false);

        return () => {
            document.removeEventListener('keydown', () => KeyPressEscFormulas, false);
        };
    }, [state.showFormulas]);

    // Logic ${name} END

    return [state, lang, ChangeSwith, ShowFormulas, SelectFormula, ChangeCheckboxMiddle, ChangeInput, onClickCalculate, InputFocus, InputOutFocus, MinimizeApp, CloseApp];
};

export default App_Logic;
