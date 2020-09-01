const CalculatWilks = (Total: number, BodyWeight: number, object: any) => {
    let coeff: number, wilks: number;
    let formula: number = object.a + object.b * BodyWeight + object.c * Math.pow(BodyWeight, 2) + object.d * Math.pow(BodyWeight, 3) + object.e * Math.pow(BodyWeight, 4) + object.f * Math.pow(BodyWeight, 5);

    coeff = 500 / formula;
    wilks = coeff * Total;

    return wilks;
};

export const WilksResultMan = (Total: number, BodyWeight: number) => {
    const ManCoof = {
        a: -216.0475144,
        b: 16.2606339,
        c: -0.002388645,
        d: -0.00113732,
        e: 7.01863e-6,
        f: -1.291e-8,
    };

    return CalculatWilks(Total, BodyWeight, ManCoof);
};

export const WilksResultWoman = (Total: number, BodyWeight: number) => {
    const WomanCoof = {
        a: 594.31747775582,
        b: -27.23842536447,
        c: 0.82112226871,
        d: -0.00930733913,
        e: 0.00004731582,
        f: -0.00000009054,
    };

    return CalculatWilks(Total, BodyWeight, WomanCoof);
};
