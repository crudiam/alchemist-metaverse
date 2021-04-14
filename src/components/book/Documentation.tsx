import ReactMarkdown from "react-markdown";
import {Book, Page } from "./Book";


interface DocumentationProps {
    pages: string[];
}
const Documentation: React.FunctionComponent<DocumentationProps> = ( { pages }) => {
    const children = pages
        .map((t, i) => (
            <Page key={`faq-page-${i}`} >
                <ReactMarkdown className="markdown">{t}</ReactMarkdown>
            </Page>
        ));

    return (<Book>{children}</Book>);
};

export default Documentation;