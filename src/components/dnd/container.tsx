import { FC, useCallback, useEffect, useState } from "react";
import Draggable, { DraggableItem as DraggableItemProps } from "./draggable";

import styled from 'styled-components';
import update from 'immutability-helper';
import { useDrop, XYCoord } from "react-dnd";
import { ItemName, ItemType } from "./types";
import SoundCloud from "../widgets/soundCloud";
import shortcutWidget from "../widgets/shortcuts";
import aboutProjectWidget from "../widgets/text/project";
import faqWidget from "../widgets/text/faq";



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
        visible: false,
        Component: SoundCloud
    },
    [ItemName.Shortcuts]: shortcutWidget,
    [ItemName.AboutProject]: aboutProjectWidget,
    [ItemName.FAQ]: faqWidget,
}


const getItemFromKey = (key: string) => {
    let item = null;

    switch (key) {
        case 'r':
        case 'R':
            item = ItemName.Radio;
            break;
        case 'p':
        case 'P':
            item = ItemName.AboutProject;
            break;
        case 'f':
        case 'F':
            item = ItemName.FAQ;
            break;
        default:
            break;
    }

    return item;
}

const Container: FC = () => {
    const [items, setItems] = useState<ContainerState>({...sampleItems });


    const updateItem = useCallback((id: ItemName, props: Partial<DraggableItem>) => 
       setItems(update(items, { [id]: { $merge: props }})),
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
        drop: (item: DraggableItem, monitor) => updateItem(
            item.id, 
            handleItemPositionChange(
                monitor.getDifferenceFromInitialOffset(),
                item
            )
        ),
    }), [updateItem]);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            const key = getItemFromKey(e.key);
            const current = items[key];
            if (!current || current.visible) return;
            updateItem(key, { visible: true });
        }

        document.addEventListener('keydown', onKeyDown)

        return () => document.removeEventListener('keydown', onKeyDown);
    }, [updateItem]);

    return (
        <StyledContainer {...{
            ref,
            children: Object.keys(items).map((key) => {
                const {visible, ...rest} = items[key];

                if (!visible) return null;

                return (<Draggable {...{ 
                    ...rest, 
                    key,
                    close: () => updateItem(key as ItemName, { visible: false }),
                }} />);
            })
        }} />
    );
}



export default Container;
