import { FC, useState } from 'react';
import { useDrag } from 'react-dnd';
import styled from 'styled-components';
import { ItemName, ItemType } from './types';



export interface DraggableChildProps {
    minimized: boolean;
}

interface DraggableProps {
    id: ItemName;
    left: number;
    top: number;
    Component: FC<DraggableChildProps>;
    close?: () => void;
}

export interface DraggableItem extends DraggableProps {
    type?: ItemType;
}


const PAPER_BACKGROUND = `
    background-color: #FBE5AF;
    background-image: 
        url("/assets/img/beige-paper.png"), 
        linear-gradient(
            to right, 
            rgba(175,113, 67,0.4), 
            rgba(175, 113, 67, 0.1) 11%, 
            rgba(0, 0, 0,0) 35%, 
            rgba(175, 113, 67, 0.1) 65%
        );
    box-shadow: 
        inset 0 0 75px rgba(175, 113, 67,0.3), 
        inset 0 0 20px rgba(175, 113, 67,0.4), 
        inset 0 0 30px rgba(175, 113, 67,0.8);

    border: solid 1px hsl(35, 20, 70);
    color: hsl(35, 35, 35);
`;

const StyledDraggable = styled.div<Partial<DraggableProps>>`
    position: absolute;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
    background: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    
    border-radius: 5px;

    padding: 0.3em 0.5em;

    max-width: 100%;
    min-width: 200px;
    z-index: 2;

    ${PAPER_BACKGROUND};
`;

const StyledDraggableHandle = styled.div<DraggableChildProps>`
    width: 100%;
    height: 25px;
    padding-bottom: ${props => props.minimized ? 0 : '0.3em'};

    cursor: move;

    display: flex;
    flex-direction: row;

    > h1 {
        padding-right: 1em;
        line-height: 25px;
        flex-grow: 1;
    }
`;


const DraggableHandleButton = styled.button`
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 5px;
    margin: 0 0 0 0.3em;
    padding: 0;
    width: 25px;
    height: 25px;
    background: rgba(0, 0, 0, 0.2);

    color: inherit;
    font: inherit;
    line-height: 25px;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
    outline: none;


    :disabled {
        cursor: not-allowed;

    }
`;

const StyledDraggableChildrenWrapper = styled.div`
    width: 100%;
`;

const Draggable: FC<DraggableProps> = ({ id, left, top, Component, close })  => {
    const [minimized, setMinimized] = useState(false);

    const [{ isDragging: _ }, drag, preview] = useDrag(() => ({
        item: { id, left, top },
        type: ItemType.DraggableItem,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    }), [id, left, top]);

    const toggleMinimized = () => setMinimized(!minimized);

    return (
        <StyledDraggable {...{
            role: ItemType.DraggableItem,
            ref: preview,
            left,
            top,
        }}> 
            <StyledDraggableHandle ref={drag} minimized={minimized}>
                <h1>{id}</h1>
                <DraggableHandleButton onClick={toggleMinimized}>_</DraggableHandleButton>
                <DraggableHandleButton onClick={close}>x</DraggableHandleButton>
            </StyledDraggableHandle>
            <StyledDraggableChildrenWrapper>
                <Component minimized={minimized} />
            </StyledDraggableChildrenWrapper> 
        </StyledDraggable>
    );
}



export default Draggable;
