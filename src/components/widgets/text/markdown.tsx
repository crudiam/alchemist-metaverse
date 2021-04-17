import { FC } from "react";
import styled from 'styled-components';
import { DraggableChildProps } from "../../dnd/draggable";
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


interface MarkdownProps extends DraggableChildProps {
    text: string;
}

const Markdown: FC<MarkdownProps> = ({ minimized, text }) => {
    if (minimized) return null;

    return (
        <StyledWrapper>
            <div>
                <ReactMarkdown remarkPlugins={[gfm]} children={text} />
            </div>
        </StyledWrapper>
    );
};

export default Markdown;
