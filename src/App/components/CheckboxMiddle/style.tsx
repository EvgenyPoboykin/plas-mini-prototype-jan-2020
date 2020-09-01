import styled from 'styled-components';

interface ISlider {
    inputValue: boolean;
    htmlFor: string;
    block: boolean;
}
interface ICheck {
    inputValue: boolean;
    id: string;
}
interface ITitle {
    inputValue: boolean;
}
interface IContainer {
    block: boolean;
}

export const Container = styled.div.attrs({ className: 'CheckboxMiddle__container' })`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    ${(props: IContainer) => (props.block ? 'opacity: 1;' : 'opacity: 0.5;')}
`;
export const Content = styled.div.attrs({ className: 'CheckboxMiddle__container--content' })`
    display: flex;
    width: 70%;
    height: 60px;
    justify-content: space-around;
    align-items: center;
`;

export const Switch = styled.label.attrs({ className: 'CheckboxMiddle__container--label', type: 'checkbox' })`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
`;
export const Check = styled.input.attrs({ className: 'CheckboxMiddle__container--checkbox' })`
    opacity: 0;
    width: 0;
    height: 0;

    &:checked {
        ${(props: ICheck) =>
            props.inputValue
                ? `border: 1px solid #ff2434;-webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);`
                : 'border: 1px solid #ccc;'}
    }
`;

export const Slider = styled.span.attrs({ className: 'CheckboxMiddle__container--slider' })`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: ${(props: ISlider) => (props.block ? 'all' : 'none')};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;

    ${(props: ISlider) => (props.inputValue ? 'border: 1px solid #ff2434;' : 'border: 1px solid #ccc;')}

    &::before {
        position: absolute;
        content: '';
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: #ccc;
        border-radius: 50%;
        ${(props: ISlider) =>
            props.inputValue
                ? `-webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);`
                : null}
        transition: 0.4s;
    }
`;
export const TitleE = styled.span.attrs({ className: 'CheckboxMiddle__container--title' })`
    color: ${(props: ITitle) => (props.inputValue ? '#ccc' : '#ff2434')};
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 600;
    transition: all 200ms ease-in-out;
    width: 102px;
    text-align: center;
`;
export const TitleNE = styled.span.attrs({ className: 'CheckboxMiddle__container--title' })`
    color: ${(props: ITitle) => (props.inputValue ? '#ff2434' : '#ccc')};

    text-transform: uppercase;
    font-size: 16px;
    font-weight: 600;
    transition: all 200ms ease-in-out;
    width: 102px;
    text-align: center;
`;
