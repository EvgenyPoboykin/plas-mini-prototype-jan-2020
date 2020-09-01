import styled from 'styled-components';

export const Container = styled.div.attrs({ className: 'CalculateBtn__container' })`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;
export const Btn = styled.div.attrs({ className: 'CalculateBtn__container--btn' })`
    display: flex;
    width: 76%;
    height: 60px;
    background-color: #d9101f;
    justify-content: center;
    align-items: center;
    pointer-events: all;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
        background-color: #ff2434;
    }
    transition: all 200ms ease-in-out;
`;
export const BtnText = styled.div.attrs({ className: 'CalculateBtn__container--btn-text' })`
    color: #ccc;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    transition: all 200ms ease-in-out;
`;
