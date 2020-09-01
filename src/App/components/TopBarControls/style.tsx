import styled from 'styled-components';

interface IControl {
    color: string;
}

export const Container = styled.div.attrs({ className: 'TopBarControls__container' })`
    width: 100%;
    height: 40px;
`;
export const Content = styled.div.attrs({ className: 'TopBarControls__container--content' })`
    display: grid;
    grid-template-columns: 1fr 80px;
    width: 100%;
    height: 100%;
`;
export const DragZone = styled.div.attrs({ className: 'TopBarControls__container--drag-zone' })`
    width: 100%;
    height: 100%;
    -webkit-app-region: drag;
    cursor: pointer;
`;
export const Controls = styled.div.attrs({ className: 'TopBarControls__container--control-zone' })`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 60px;
    height: 100%;
`;
export const Control = styled.div.attrs({ className: 'TopBarControls__container--contro-zone' })`
    width: 14px;
    height: 14px;
    background: ${(props: IControl) => (props.color ? props.color : '#ccc')};
    border-radius: 5px;
    opacity: 0.7;
    pointer-events: all;
    cursor: pointer;
    &:hover {
        opacity: 1;
    }
`;
