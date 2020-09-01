export const ConvertKgLb = (_weight: number, _value: boolean) => {
    if (_value === true) {
        return _weight / 2.2046;
    } else {
        return _weight;
    }
};
