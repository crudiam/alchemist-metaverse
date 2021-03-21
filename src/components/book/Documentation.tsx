import {Book, Page } from "./Book";





const Documentation: React.FunctionComponent = () => {
    const pages = new Array(10).fill('hello world').map((t, i) => <Page key={`documentation-page-${i}`} >{t}</Page>);
    return (
        <Book>
            {pages}
        </Book>
    );
}

export default Documentation;