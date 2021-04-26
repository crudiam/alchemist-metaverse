import { FC } from "react";
import { DraggableChildProps } from "../../dnd/draggable";
import { DraggableItem } from '../../dnd/container';
import { ItemName } from "../../dnd/types";
import styled from 'styled-components';



const SytledInventoryWrapper = styled.div`
    padding: 0.5em 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;

`;


const StyledInventoryDetail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
        border: 3px solid #665220;
        width: 98%;
        margin: 0.5em 0;

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

const StyledTable = styled.table`
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

        > img {
            margin: 2px;
            width: 26px;
            height: 26px;

        }
    }

`;

const StyledItemDetail = styled.div`
    box-sizing: border-box;
    width: 400px;
    height: 500px;
    padding: 0 1em;

    > div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        height: 100%;
        box-sizing: border-box;

        > img {
            max-width: 100%;
            max-height: 250px;
        }
    }

`;


const rows = 5;
const cols = 10;


const InventoryWidget: FC<DraggableChildProps> = ({ minimized }) => {
    if (minimized) return null;

    return (
        <SytledInventoryWrapper>
            <StyledInventoryDetail>
                <img src="https://via.placeholder.com/280x180?text=some+cool+animation" />
                <br />
                <br />

                <input value={'0xeth-address-comes-here'}/>
                <StyledTable>
                    {new Array(rows).fill(0).map((_, row_index) => (
                        <tr {...{ key: `row-${row_index}`}}>
                            {new Array(cols).fill(0).map((_, col_index) => (
                                <td {...{ key: `col-${row_index}-${col_index}`}}>
                                    {row_index == 0 && col_index < 5 ? (
                                        <img src="https://via.placeholder.com/30" />
                                    ) : null}
                                </td>
                            ))}
                        </tr>
                    ))}
                </StyledTable>
            </StyledInventoryDetail>

            <StyledItemDetail>
                <div>
                    <img src="https://via.placeholder.com/480x480?text=nft+image+comes+here" />
                    <div>
                        <br />
                        <hr />
                        <br />
                        <p>lorem: value</p>
                        <p>ipsum: value</p>
                        <p>.</p>
                        <p>.</p>
                        <p>.</p>
                        <p>Here we have the properties of the NFT</p>
                        <br />
                        <br />
                        <p>&lt;-- this inventory can either display every NFT on the wallet or just the crucibles  </p>
                    </div>
                </div>
            </StyledItemDetail>

        </SytledInventoryWrapper>
    );
}

const inventoryWidget: DraggableItem = {
    id: ItemName.Inventory,
    top: 100,
    left: 100,
    visible: true,
    Component: InventoryWidget
}

export default inventoryWidget;


