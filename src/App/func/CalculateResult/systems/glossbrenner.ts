import { MaleArr, FemaleArr, ageTable } from './ConstGlossbrenner';

const GetResult = (age: number, totalWeight: number, gender: number) => {
    let ageCoof: number;
    if (age >= 40) {
        ageCoof = ageTable.filter((agetable) => agetable.lable === age)[0].value;
        return gender * totalWeight * ageCoof;
    }
    return gender * totalWeight;
};

export const Glossbrenner = (selfWeight: number, totalWeight: number, age: number, gender: boolean) => {
    var r: number = Math.round((selfWeight - 40) * 20);
    var genderCoof: number = 0;

    if (gender === false) {
        if (selfWeight > 231.9) {
            genderCoof = MaleArr[MaleArr.length - 1];
        } else if (selfWeight < 40) {
            genderCoof = MaleArr[0];
        } else {
            genderCoof = MaleArr[r];
        }
    } else if (gender === true) {
        if (selfWeight > 170) {
            genderCoof = 0.630945 - ((selfWeight - 170) / 0.05) * 0.000065;
        } else if (selfWeight < 40) {
            genderCoof = FemaleArr[0];
        } else {
            genderCoof = FemaleArr[r];
        }
    }

    return GetResult(age, totalWeight, genderCoof);
};
