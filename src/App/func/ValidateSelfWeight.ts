export const ValidateSelfWeight = (_weight: string) => {
    let NewWeight;

    switch (_weight.slice(-1)) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '.':
            return _weight;

        default:
            NewWeight = _weight.substring(0, _weight.length - 1);
    }
    return NewWeight;
};
