import { FC } from 'react';
import { useDrag } from 'react-dnd';
import styled from 'styled-components';
import { ItemType } from './types';


interface DraggableProps {
    id: string;
    left: number;
    top: number;
}

export interface DraggableItem extends DraggableProps {
    type?: ItemType;
}

const StyledDraggable = styled.div<Partial<DraggableProps>>`
    position: absolute;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
    border: 1px solid black;
    background: rgba(255, 255, 255, 0.5);

    padding: 0.5em 1em;
    cursor: move;
    width: 50px;
    height: 50px;

    z-index: 2;
`;

const Draggable: FC<DraggableProps> = ({ id, left, top, children })  => {

    const [{ isDragging: _ }, drag] = useDrag(() => ({
        item: { id, left, top },
        type: ItemType.DraggableItem,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    }), [id, left, top]);

    return (
        <StyledDraggable {...{
            role: ItemType.DraggableItem,
            ref: drag,
            children,
            left,
            top,
        }} />
    );
}



export default Draggable;
