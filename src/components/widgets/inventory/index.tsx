import { FC } from "react";
import { DraggableChildProps } from "../../dnd/draggable";
import { DraggableItem } from '../../dnd/container';
import { ItemName } from "../../dnd/types";
import styled from 'styled-components';



const SytledTableWrapper = styled.div`

    padding: 0.5em 0;

`;

const StyledTable = styled.table`

    /* width: 400px; */


    border: 1px solid black;

    background-color: #665220;
    background-image: 
        url("/assets/img/beige-paper.png"), 
        linear-gradient(
            to right, 
            rgba(175,113, 67,0.4), 
            rgba(175, 113, 67, 0.1) 11%, 
            rgba(0, 0, 0,0) 35%, 
            rgba(175, 113, 67, 0.1) 65%
        );

    td {
        width: 30px;
        height: 30px;
        border: 1px solid black;

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
            inset 0 0 5px rgba(175, 113, 67,0.3), 
            inset 0 0 5px rgba(175, 113, 67,0.4), 
            inset 0 0 5px rgba(175, 113, 67,0.8);
    }

`;



const rows = 5;
const cols = 10;




const InventoryWidget: FC<DraggableChildProps> = ({ minimized }) => {
    if (minimized) return null;


    return (
        <SytledTableWrapper>

            <StyledTable>
                {new Array(rows).fill(0).map((_, row_index) => (
                    <tr {...{ key: `row-${row_index}`}}>
                        {new Array(cols).fill(0).map((_, col_index) => (
                            <td {...{ key: `col-${row_index}-${col_index}`}}>

                            </td>
                        ))}
                    </tr>
                ))}
            </StyledTable>

        </SytledTableWrapper>
    );
}

const inventoryWidget: DraggableItem = {
    id: ItemName.Inventory,
    top: 200,
    left: 300,
    visible: true,
    Component: InventoryWidget
}

export default inventoryWidget;


