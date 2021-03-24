import { useEffect, useState } from "react";
import {Book, Page } from "./Book";



const README_URL = 'https://raw.githubusercontent.com/alchemistcoin/alchemist/main/README.md';

const Documentation: React.FunctionComponent = () => {
    const [readme, setReadme] = useState<string>('');

    useEffect(() => {
        const getReadme = async () => {
            const resp = await fetch(README_URL);
            const body = await resp.text()
            setReadme(body)
        };

        getReadme();

    }, []);

    console.log(readme);

    const pages = new Array(10).fill('hello world').map((t, i) => <Page key={`documentation-page-${i}`} >{t}</Page>);

    return (<Book>{pages}</Book>);
}

export default Documentation;