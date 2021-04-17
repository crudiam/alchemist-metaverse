import { FC, ReactChild, ReactNode, useCallback, useState } from "react";
import Draggable, { DraggableChildProps, DraggableItem as DraggableItemProps } from "./draggable";

import styled from 'styled-components';
import update from 'immutability-helper';
import { useDrop, XYCoord } from "react-dnd";
import { ItemName, ItemType } from "./types";
import SoundCloud from "../widgets/soundCloud";
import shortcutWidget from "../widgets/shortcuts";
import aboutProjectWidget from "../widgets/text/project";



/**
 * @todo: decide if you want to have a static room and click
 *  or use keyboard shortcuts to interact with everything.
 * @todo: revisit the styles to make the threejs env clickable?
 */
const StyledContainer = styled.div`
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    
`;


export interface DraggableItem extends DraggableItemProps {
    visible: boolean;
}

interface ContainerState {
    [key: string]: DraggableItem;
}

const sampleItems = {
    [ItemName.Radio]: { 
        id: ItemName.Radio, 
        top: 0, 
        left: 0,
        visible: true,
        Component: SoundCloud
    },
    [ItemName.Shortcuts]: shortcutWidget,
    [ItemName.AboutProject]: aboutProjectWidget

}

const Container: FC = () => {
    const [items, setItems] = useState<ContainerState>({...sampleItems });

    const moveBox = useCallback(({ id, left, top }: Partial<DraggableItem>) => 
        setItems(update(items, { [id]: { $merge: { left, top }}})),
        [items, setItems]
    );

    const handleItemPositionChange = ({x, y}: XYCoord, { id, left, top }: DraggableItem) => ({
        left: Math.round(left + x),
        top: Math.round(top + y),
        id,
    });

    const [, ref] = useDrop(() => ({
        accept: ItemType.DraggableItem,
        collect: monitor => ({ isOver: !!monitor.isOver() }),
        drop: (item: DraggableItem, monitor) => moveBox(handleItemPositionChange(
            monitor.getDifferenceFromInitialOffset(),
            item
        )),
    }), [moveBox]);


    return (
        <StyledContainer {...{
            ref,
            children: Object.keys(items).map((key) => {
                const {visible, ...rest} = items[key];

                if (!visible) return null;

                return (<Draggable key={key} {...rest } />);
            })
        }} />
    );
}



export default Container;
