import { schwartz, malone } from './ConstSchwartzmalone';

export const SchwartzMalone = (selfWeight: number, weight: number, gender: boolean) => {
    let weightCoof: number, findWeight: string, findCoof: string;

    if ((selfWeight + '').split('.', 2) && (selfWeight + '').split('.', 2)[1] !== undefined) {
        findWeight = (selfWeight + '').split('.', 2)[0];
        findCoof = (selfWeight + '').split('.', 2)[1];
    }

    findWeight = (selfWeight + '').split('.', 2)[0];
    findCoof = '0';

    if (gender === true) {
        weightCoof = schwartz.filter((item) => item.label === parseInt(findWeight))[0].value[parseInt(findCoof)];
    }

    weightCoof = malone.filter((item) => item.label === parseInt(findWeight))[0].value[parseInt(findCoof)];

    return weightCoof * weight;
};
