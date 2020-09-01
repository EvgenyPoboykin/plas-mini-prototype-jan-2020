import styled from 'styled-components';

interface IContaner {
    id: string;
    block: boolean;
}
interface IAll {
    id: string;
}

export const Container = styled.div.attrs<IContaner>({ className: 'Input__container' })`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: #ff2434;
    position: relative;

    ${(props: IContaner) => (props.block ? `opacity: 0.5` : `opacity: 1;`)}
`;
export const InputField = styled.input.attrs<IContaner>({ className: 'Input__container--input', type: 'number' })`
    width: 76%;
    height: 60px;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    color: #d9101f;
    text-transform: uppercase;
    background-color: transparent;
    border-bottom: 1px solid #d9101f;
    pointer-events: ${(props: IContaner) => (props.block ? 'none' : 'all')};

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &:hover {
        border-bottom: 1px solid #ff2434;
        color: #ff2434;
    }
    transition: all 200ms ease-in-out;
`;
export const Label = styled.div.attrs<IAll>({ className: 'Input__container--label' })`
    position: absolute;
    font-size: 10px;
    text-align: center;
    font-weight: bold;
    color: #d9101f;
    text-transform: uppercase;
    border: 1px solid #d9101f;
    left: 70px;
    padding: 6px 9px;
    border-radius: 4px;

    &:hover {
        color: #ff2434;
        border: 1px solid #ff2434;
    }

    transition: all 200ms ease-in-out;
`;
export const Error = styled.div.attrs<IAll>({ className: 'Input__container--label-error' })`
    position: absolute;
    font-size: 12px;
    text-align: center;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    background: #d9101f;
    right: 70px;
    padding: 6px 9px;
    border-radius: 4px;

    transition: all 200ms ease-in-out;
`;
