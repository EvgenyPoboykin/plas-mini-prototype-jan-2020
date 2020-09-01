import styled from 'styled-components';

interface IContainer {
    showFormulas: boolean;
}

export const Container = styled.div.attrs({ className: 'FormulaList__container' })`
    display: ${(props: IContainer) => (props.showFormulas ? 'grid' : 'none')};
    grid-template-columns: 1fr;
    grid-template-rows: repeat(7, 1fr);
    grid-gap: 20px;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
    padding: 20px;
`;
export const ContentBG = styled.div.attrs({ className: 'FormulaList__container--content-bg' })`
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
    z-index: 0;
`;
export const Title = styled.div.attrs({ className: 'FormulaList__container--title' })`
    display: grid;
    align-self: center;
    justify-self: center;
    font-size: 21px;
    font-weight: bold;
    color: #ff2434;
    z-index: 2;
`;
export const FormulaBtn = styled.div.attrs({ className: 'FormulaList__container--formula-btn' })`
    display: grid;
    align-self: center;
    justify-self: center;
    font-size: 18px;
    font-weight: bold;
    color: #ccc;
    z-index: 2;
    cursor: pointer;
    opacity: 0.7;
    user-select: none;
    pointer-events: all;
    &:hover {
        opacity: 1;
    }

    transition: all 200ms ease-in-out;
`;
