import { FC } from "react";
import styled from 'styled-components';
import { DraggableChildProps } from "../dnd/draggable";
import { DraggableItem } from '../dnd/container';
import { ItemName } from "../dnd/types";
import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm'


const StyledWrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    max-width: 500px;
    max-height: 800px;
    padding: 1em;

    > div {
        flex-grow: 1;
        overflow-y: scroll;
        padding-bottom: 1em;

        ::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
        }

        ::-webkit-scrollbar {
            width: 5px;
        }

        ::-webkit-scrollbar-thumb {
            background-color: rgba(0, 0, 0, 0.2);
        }

        hr {
            margin: 0.5em 0;
            border-top: 1px solid rgba(0, 0, 0, 0.05);
            border-style: dashed;
        }


        > p {
            margin-top: 1em;
        }

        h1, h2, h3, h4, h5, h6 {
            margin-top: 1.1em;
            margin-bottom: 0.2em;
        }

        ul {
            list-style: square !important;
            list-style-type: square;

            > li {
                padding-left: 1em;
                text-align: left;
                display: list-item;
            }
        }
    }
`;


const source = `

# Welcome to Alchemist Metaverse


This is a project that I have started one day after joining the **Alchemist** community and Senior Alchemists were generous enough to give me 
a grand to keep building.


Just like Alchemist coin "the only plan is that there is no plan". I am currently building as something comes to my mind or see an opportunity.


## What can you do here?

* Listen Alchemist radio (iframe embedded soundcloud playlist)_visit [#alchemist-radio](https://discord.com/channels/812035504869998644/827687817416278016) channel for more info on the radio_
* Read FAQ
* View beautiful alchemist table (I have plans for this)
* Drag and Drop stuff :)

basically there is not too many features for now but we are getting there. 
Please write me a message if you have any cool ideas on what to do next (**crud#0293** on discord).

## Some ideas I had in mind:

* Have a full game-like experience (WASD for moving E for interacting with objects ...etc.)
* Add some window widgeds for gamification
    * Quests (What you can do on alchemist)
    * Documentation (where you get information about alchemist coin)
    * Inventory (view your crucubles or maybe all of your NFT's)
* Extend the 3D area into a Room or to a Tavern, or maybe both?
* Interact with surrounding objects
* Chat with people who are also on the metaverse 🤔
* Full multiplayer type experience where you see others 🤯
* Slay animals to get items 🤪 ok I went a little too far, but you get the point basically we can do anything we want...



Anyways do whatever you want whith those informations. Until the next update Enjoy!

`;

const AboutProject: FC<DraggableChildProps> = ({ minimized }) => {
    if (minimized) return null;

    return (
        <StyledWrapper>
            <div>
                <ReactMarkdown remarkPlugins={[gfm]} children={source} />
            </div>
        </StyledWrapper>
    );
};


const aboutProjectWidget: DraggableItem = {
    id: ItemName.AboutProject,
    top: 400,
    left: window.innerWidth /2,
    visible: true,
    Component: AboutProject
}


export default aboutProjectWidget;
