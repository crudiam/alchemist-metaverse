import { FC } from "react";
import { DraggableChildProps } from "../../dnd/draggable";
import { DraggableItem } from '../../dnd/container';
import { ItemName } from "../../dnd/types";
import Markdown from "./markdown";

const text = `
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
* Add some window widgeds for further gamification
    * Quests (What you can do for alchemist)
    * Documentation (where you get information about alchemist coin)
    * Inventory (view your crucubles or maybe all of your NFT's)
* Extend the 3D area into a Room or to a Tavern, or maybe both?
* Interact with surrounding objects
* Chat with people who are also on the metaverse 🤔
* Full multiplayer type experience where you see others 🤯
* Slay animals to get items 🤪 ok I went a little too far, but you get the point basically we can do anything we want...


### Additionally
- [github link](https://github.com/crudiam/alchemist-metaverse) in case you want to create issues or contribute.


Anyways do whatever you want whith those informations. Until the next update Enjoy!

`;

const AboutProject: FC<DraggableChildProps> = (props) => (
    <Markdown {...{ ...props, text }}/>
);

const aboutProjectWidget: DraggableItem = {
    id: ItemName.AboutProject,
    top: 400,
    left: window.innerWidth /2,
    visible: false,
    Component: AboutProject
}

export default aboutProjectWidget;
