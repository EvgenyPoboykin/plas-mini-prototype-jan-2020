import styled from 'styled-components';

export const Container = styled.div.attrs({ className: 'Checkboxes__container' })`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);

    padding-right: 20px;
`;
