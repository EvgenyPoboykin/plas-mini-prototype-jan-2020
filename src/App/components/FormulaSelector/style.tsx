import styled from 'styled-components';

export const Container = styled.div.attrs({ className: 'FormulaSelectron__container' })`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-self: center;
`;
export const ContainerBtn = styled.div.attrs({ className: 'FormulaSelectron__container--btn' })`
    display: flex;
    width: 76%;
    height: 60px;
    border-top: 1px solid #ff2434;
    border-bottom: 1px solid #ff2434;
    justify-content: center;
    align-self: center;
    pointer-events: all;
    cursor: pointer;
`;
export const Content = styled.div.attrs({ className: 'FormulaSelectron__container--content' })`
    display: grid;
    color: #ff2434;
    font-size: 18px;
    font-weight: bold;
    align-self: center;
    justify-self: center;
`;
