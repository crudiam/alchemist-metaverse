import { FC } from "react";
import styled from 'styled-components';
import { DraggableChildProps } from "../dnd/draggable";
import { DraggableItem } from '../dnd/container';
import { ItemName } from "../dnd/types";

const StyledShortcutsWrapper = styled.div`
    max-width: 300px;
    padding: 1em 0;

    hr {
        margin: 0.5em 0;
        border-top: 1px solid rgba(0, 0, 0, 0.05);
        border-style: dashed;
    }
`;

const Shortcuts: FC<DraggableChildProps> = ({ minimized }) => {
    if (minimized) return null;

    return (
        <StyledShortcutsWrapper>
            <p>
                <span>
                    <b>R </b> - Alchemist Radio <br />
                    <b>P </b> - About this Project<br />
                    <b>F </b> - Alchemist FAQ<br />
                    <b>I </b> - Inventory<br />
                </span>
            </p>
            <hr />
            <p>
                <small>Shortcuts above are the only supported shortcuts for now, I will add new ones to the list</small>
            </p>
        </StyledShortcutsWrapper>
    );
};


const shortcutWidget: DraggableItem = {
    id: ItemName.Shortcuts,
    top: 30,
    left: window.innerWidth - 300,
    visible: true,
    Component: Shortcuts
}


export default shortcutWidget;
