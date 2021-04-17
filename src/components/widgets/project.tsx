import { FC } from "react";
import styled from 'styled-components';
import { DraggableChildProps } from "../dnd/draggable";
import { DraggableItem } from '../dnd/container';
import { ItemName } from "../dnd/types";

const StyledWrapper = styled.div`
    max-width: 300px;
    padding: 1em 0;

    hr {
        margin: 0.5em 0;
        border-top: 1px solid rgba(0, 0, 0, 0.05);
        border-style: dashed;
    }
`;

const AboutProject: FC<DraggableChildProps> = ({ minimized }) => {
    if (minimized) return null;

    return (
        <StyledWrapper>
            hello world
        </StyledWrapper>
    );
};


const aboutProjectWidget: DraggableItem = {
    id: ItemName.AboutProject,
    top: window.innerHeight - 200,
    left: window.innerWidth - 300,
    visible: true,
    Component: AboutProject
}


export default aboutProjectWidget;
