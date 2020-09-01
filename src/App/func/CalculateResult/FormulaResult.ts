import { IPFResultManClassic, IPFResultWomanClassic, IPFResultManClassicBench, IPFResultWomanClassicBench, IPFResultManEquipped, IPFResultWomanEquipped, IPFResultManEquippedBench, IPFResultWomanEquippedBench } from './systems/ipf';

import { WilksResultMan, WilksResultWoman } from './systems/wilks';

import { Glossbrenner } from './systems/glossbrenner';

import { Reshel } from './systems/reshel';

import { SchwartzMalone } from './systems/schwartzmalone';

import { ConvertKgLb } from './systems/ConvertKgLbs';

const FormulaResult = (lbs: boolean, formulaValue: string, equipped: boolean, gender: boolean, age: number, selfWeight: number, totalWeight: number) => {
    let res: number = 0,
        res_string: string,
        result: number = 0;
    let BodyWeight: number = ConvertKgLb(selfWeight, lbs);
    let Total: number = ConvertKgLb(totalWeight, lbs);
    let Age: number = age;

    if (gender === false) {
        if (formulaValue === 'IPF Classic') {
            if (equipped === false) {
                result = IPFResultManEquipped(Total, BodyWeight);
            }

            result = IPFResultManClassic(Total, BodyWeight);
        } else if (formulaValue === 'IPF Classic Bench') {
            if (equipped === false) {
                result = IPFResultManEquippedBench(Total, BodyWeight);
            }

            result = IPFResultManClassicBench(Total, BodyWeight);
        } else if (formulaValue === 'Wilks') {
            result = WilksResultMan(Total, BodyWeight);
        } else if (formulaValue === 'Reshel') {
            result = Reshel(selfWeight, Total, Age, gender);
        } else if (formulaValue === 'Glossbrenner') {
            result = Glossbrenner(selfWeight, Total, Age, gender);
        } else if (formulaValue === 'Schwartz-Malone') {
            result = SchwartzMalone(selfWeight, Total, gender);
        }
    } else if (gender === true) {
        if (formulaValue === 'IPF Classic') {
            if (equipped === false) {
                result = IPFResultWomanEquipped(Total, BodyWeight);
            }

            result = IPFResultWomanClassic(Total, BodyWeight);
        } else if (formulaValue === 'IPF Classic Bench') {
            if (equipped === false) {
                result = IPFResultWomanEquippedBench(Total, BodyWeight);
            }
            result = IPFResultWomanClassicBench(Total, BodyWeight);
        } else if (formulaValue === 'Wilks') {
            result = WilksResultWoman(Total, BodyWeight);
        } else if (formulaValue === 'Reshel') {
            result = Reshel(selfWeight, Total, Age, gender);
        } else if (formulaValue === 'Glossbrenner') {
            result = Glossbrenner(selfWeight, Total, Age, gender);
        } else if (formulaValue === 'Schwartz-Malone') {
            result = SchwartzMalone(selfWeight, Total, gender);
        }
    } else {
        res = 0;
    }
    res_string = result.toFixed(2);
    res = parseFloat(res_string);
    return res;
};

export default FormulaResult;
