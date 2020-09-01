import styled from 'styled-components';

interface ISlider {
    inputValue: boolean;
    htmlFor: string;
}
interface ICheck {
    inputValue: boolean;
    id: string;
}
interface ITitle {
    inputValue: boolean;
}

export const Container = styled.div.attrs({ className: 'Checkbox__container' })`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const Switch = styled.label.attrs({ className: 'Checkbox__container--label', type: 'checkbox' })`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
`;
export const Check = styled.input.attrs({ className: 'Checkbox__container--checkbox' })`
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

export const Slider = styled.span.attrs({ className: 'Checkbox__container--slider' })`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: all;
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
export const Title = styled.span.attrs({ className: 'Checkbox__container--title' })`
    color: ${(props: ITitle) => (props.inputValue ? '#ff2434' : '#ccc')};

    font-size: 16px;
    font-weight: 600;
    width: 60px;

    transition: all 200ms ease-in-out;
`;
