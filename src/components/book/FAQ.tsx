import ReactMarkdown from "react-markdown";
import {Book, Page } from "./Book";

interface FAQProps {
    pages: string[];
}

const FAQ: React.FunctionComponent<FAQProps> = ({ pages }) => {

    const children = pages
        .map((t, i) => (
            <Page key={`faq-page-${i}`} >
                <ReactMarkdown className="markdown">{t}</ReactMarkdown>
            </Page>
        ));

    return (<Book>{children}</Book>);
}

export default FAQ;