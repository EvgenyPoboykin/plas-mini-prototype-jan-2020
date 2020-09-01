import styled from 'styled-components';
import logotype from '../../../assets/logo.png';
export const Container = styled.div.attrs({ className: 'Logo__container' })`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    justify-self: center;
    padding-left: 20px;
`;
export const Logotype = styled.img.attrs({ className: 'Logo__container--logo-image', src: logotype })`
    height: 140px;
`;
