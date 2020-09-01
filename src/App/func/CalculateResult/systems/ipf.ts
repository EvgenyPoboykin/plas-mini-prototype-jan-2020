import { constants } from './ConstIpf';

// Classic ------------------------------------------------------------------------------------
// 3-Lift ------------------------------------------------------------------------------------
export const IPFResultManClassic = (Total: number, BodyWeight: number) => {
    let ipf: number;

    ipf = 500 + (100 * (Total - (constants.men.Classic3Lift.Constant1 * Math.log(BodyWeight) - constants.men.Classic3Lift.Constant2))) / (constants.men.Classic3Lift.Constant3 * Math.log(BodyWeight) - constants.men.Classic3Lift.Constant4);

    return ipf;
};

export const IPFResultWomanClassic = (Total: number, BodyWeight: number) => {
    let ipf: number;

    ipf = 500 + (100 * (Total - (constants.women.Classic3Lift.Constant1 * Math.log(BodyWeight) - constants.women.Classic3Lift.Constant2))) / (constants.women.Classic3Lift.Constant3 * Math.log(BodyWeight) - constants.women.Classic3Lift.Constant4);

    return ipf;
};
// Bench ------------------------------------------------------------------------------------
export const IPFResultManClassicBench = (Total: number, BodyWeight: number) => {
    let ipf: number;

    ipf = 500 + (100 * (Total - (constants.men.ClassicBench.Constant1 * Math.log(BodyWeight) - constants.men.ClassicBench.Constant2))) / (constants.men.ClassicBench.Constant3 * Math.log(BodyWeight) - constants.men.ClassicBench.Constant4);

    return ipf;
};

export const IPFResultWomanClassicBench = (Total: number, BodyWeight: number) => {
    let ipf: number;

    ipf = 500 + (100 * (Total - (constants.women.ClassicBench.Constant1 * Math.log(BodyWeight) - constants.women.ClassicBench.Constant2))) / (constants.women.ClassicBench.Constant3 * Math.log(BodyWeight) - constants.women.ClassicBench.Constant4);

    return ipf;
};

// Equipped ------------------------------------------------------------------------------------
// 3-Lift ------------------------------------------------------------------------------------
export const IPFResultManEquipped = (Total: number, BodyWeight: number) => {
    let ipf: number;

    ipf = 500 + (100 * (Total - (constants.men.Equipped3Lift.Constant1 * Math.log(BodyWeight) - constants.men.Equipped3Lift.Constant2))) / (constants.men.Equipped3Lift.Constant3 * Math.log(BodyWeight) - constants.men.Equipped3Lift.Constant4);

    return ipf;
};

export const IPFResultWomanEquipped = (Total: number, BodyWeight: number) => {
    let ipf: number;

    ipf = 500 + (100 * (Total - (constants.women.Equipped3Lift.Constant1 * Math.log(BodyWeight) - constants.women.Equipped3Lift.Constant2))) / (constants.women.Equipped3Lift.Constant3 * Math.log(BodyWeight) - constants.women.Equipped3Lift.Constant4);

    return ipf;
};
// Bench ------------------------------------------------------------------------------------
export const IPFResultManEquippedBench = (Total: number, BodyWeight: number) => {
    let ipf: number;

    ipf = 500 + (100 * (Total - (constants.men.EquippedBench.Constant1 * Math.log(BodyWeight) - constants.men.EquippedBench.Constant2))) / (constants.men.EquippedBench.Constant3 * Math.log(BodyWeight) - constants.men.EquippedBench.Constant4);

    return ipf;
};

export const IPFResultWomanEquippedBench = (Total: number, BodyWeight: number) => {
    let ipf: number;

    ipf = 500 + (100 * (Total - (constants.women.EquippedBench.Constant1 * Math.log(BodyWeight) - constants.women.EquippedBench.Constant2))) / (constants.women.EquippedBench.Constant3 * Math.log(BodyWeight) - constants.women.EquippedBench.Constant4);

    return ipf;
};
// Export ------------------------------------------------------------------------------------
