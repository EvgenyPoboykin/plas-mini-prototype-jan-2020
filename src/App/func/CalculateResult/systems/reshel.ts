import { ReshelTableWomen, ReshelTableMen, ReshelTableAge } from './ConstReshel';

const GetResult = (ageCoof: number, selfWeightCoof: number, weight: number) => {
    if (ageCoof === 0) return selfWeightCoof * weight;

    return selfWeightCoof * weight * ageCoof;
};

export const Reshel = (selfWeight: number, weight: number, age: number, gender: boolean) => {
    let ageCoof: number, selfWeightCoof: number, newArray: any[];
    ageCoof = age < 40 ? 0 : ReshelTableAge.filter((agetable) => agetable.label === age)[0].value;

    if (gender === false) {
        newArray = ReshelTableMen.filter((weight) => weight.label >= selfWeight);
        selfWeightCoof = newArray[0].value;
    }

    newArray = ReshelTableWomen.filter((weight) => weight.label >= selfWeight);
    selfWeightCoof = newArray[0].value;

    return GetResult(ageCoof, selfWeightCoof, weight);
};
