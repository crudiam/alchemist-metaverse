import {Book, Page } from "./Book";



const README_URL = 'https://raw.githubusercontent.com/alchemistcoin/alchemist/main/README.md';

const Documentation: React.FunctionComponent = () => {
    const pages = new Array(10).fill('hello world').map((t, i) => <Page key={`documentation-page-${i}`} >{t}</Page>);
    return (
        <Book>
            {pages}
        </Book>
    );
}

export default Documentation;