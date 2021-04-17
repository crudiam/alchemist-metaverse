import { FC, useEffect, useState } from "react";
import { DraggableChildProps } from "../../dnd/draggable";
import { DraggableItem } from '../../dnd/container';
import { ItemName } from "../../dnd/types";
import Markdown from "./markdown";

const FAQ_URL = 'https://hackmd.io/@thegostep/%E2%9A%97%EF%B8%8F/download';

const FAQWidget: FC<DraggableChildProps> = (props) => {
    const [text, setText] = useState('');

    useEffect(() => {
        const getFAQ = async () => {
            const resp = await fetch(FAQ_URL);
            const body = await resp.text();
            setText(body)
        };

        getFAQ();
    }, []);

    return ( <Markdown {...{ ...props, text }}/>)
}

const faqWidget: DraggableItem = {
    id: ItemName.FAQ,
    top: 400,
    left: window.innerWidth /2,
    visible: false,
    Component: FAQWidget
}

export default faqWidget;

