import styled from 'styled-components';

export const Container = styled.div.attrs({ className: 'TopBar__container' })`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 140px;
`;
