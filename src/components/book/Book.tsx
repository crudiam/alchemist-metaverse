import { Children, forwardRef, FunctionComponent, ReactElement } from 'react';
import HTMLFlipBook from "react-pageflip"
import styled from 'styled-components';



const StyledBookWrapper = styled.div`
    display: block;
    min-width: 1100px;
`;

const StyledPage = styled.div`
    padding: 1em 3em;
    box-sizing: border-box;
    /* border: 2px solid rgb(175,113,67, 0.8); */
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

    font-size: 20px;
    line-height: 1.9;
    letter-spacing: 0.05em;

    background-color: hsl(35, 55, 98);
    color: hsl(35, 35, 35);
    border: solid 1px hsl(35, 20, 70);

    overflow: hidden;

    &.--left {
        border-left: 0;
        /* box-shadow: inset -7px 0 30px -7px rgba(0, 0, 0, 0.4); */

    }

    &.--right {
        border-left: 0;
        /* box-shadow: inset 7px 0 30px -7px rgba(0, 0, 0, 0.4); */
    }

`;


type DivProps = React.HTMLProps<HTMLDivElement>

export const Page = forwardRef<HTMLDivElement, DivProps>((props, ref) => {
    return (
        <StyledPage className="book-page" ref={ref}>
            {props.children}
        </StyledPage>
    );
});

export const Book: React.FunctionComponent = ({ children }) =>  {
    /**
     * @todo: finalize the default props
     */
    return (
        <StyledBookWrapper id="flip-book">
            <HTMLFlipBook {...{
                    width: 550, // base page width
                    height: 733, // base page height
                    size: "stretch",
                    minWidth: 315,
                    maxWidth: 550,
                    minHeight: 420,
                    maxHeight: 733,
                    maxShadowOpacity: 0.2,
                    showCover: false,
                    mobileScrollSupport: false,
                    children
            }} />
        </StyledBookWrapper>
    );
};