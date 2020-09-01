import React, { createContext } from 'react';

interface IProvider {
    children: React.ReactNode;
    value: any;
}

interface ILanguage {
    selectFormula: string;
    equipped: string;
    no_equipped: string;
    male: string;
    female: string;
    age: string;
    self_weight: string;
    total_weight: string;
    calculate: string;
    score: string;
    ep: string;
}
export interface IState {
    en: boolean;
    lbs: boolean;
    showFormulas: boolean;
    selectFormula: string;
    equipped: boolean;
    gender: boolean;
    age: number;
    selfWeight: number;
    totalWeight: number;
    result: number;
    messages: any[];
    inputFocus: boolean;
}

export const initialState: IState = {
    en: true,
    lbs: false,
    showFormulas: false,
    selectFormula: 'IPF Classic',
    equipped: false,
    gender: false,
    age: 0,
    selfWeight: 0,
    totalWeight: 0,
    result: 0,
    messages: [],
    inputFocus: false,
};

export const ContextApp = createContext<any>(null);

export const ProviderApp: React.FC<IProvider> = ({ children, value }) => {
    return <ContextApp.Provider value={value}>{children}</ContextApp.Provider>;
};

export const En: ILanguage = {
    selectFormula: 'Select Formula',
    equipped: 'equipped',
    no_equipped: 'no equipped',
    male: 'male',
    female: 'female',
    age: 'age',
    self_weight: 'self weight',
    total_weight: 'total weight',
    calculate: 'calculate',
    score: 'Score',
    ep: 'Evgeny Poboykin',
};
export const Ru: ILanguage = {
    selectFormula: 'Выбирите Формулу',
    equipped: 'экипа',
    no_equipped: 'без экипы',
    male: 'мужчина',
    female: 'женщина',
    age: 'возраст',
    self_weight: 'свой вес',
    total_weight: 'поднятый вес',
    calculate: 'посчитать',
    score: 'Результат',
    ep: 'Евгений Побойкин',
};
