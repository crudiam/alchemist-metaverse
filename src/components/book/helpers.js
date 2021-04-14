
/**
 * a horrible way to split a markdown text into pages. 
 * @todo: improve this!
 */
export const splitMarkdownIntoPages = (text) => {
    const max_lines = 18; // can change depending on the height
    const max_chars = 48; // can change depending on the width
    const capacity = max_chars * max_lines;
    const raw_pages = [];
    let cursor = 0;

    text.replace('\n\n', '\n');
    text.replace('\r\r', '\r');

    while (cursor <= text.length) {
        let end = cursor + capacity;
        if (end > text.length) {
            end = text.length;
        }

        let index = cursor;
        let processed = 0; 
        let page = '';
        let lines = 0;

        let single_sentence = false;
        let reading_link_url = false;
        let consecutive_chars = 0;

        while (lines < max_lines && (
            processed <= capacity || 
            reading_link_url || 
            single_sentence
        )) {
            const current = text[index++];
            if (current !== undefined) {
                page += current;

            }
            single_sentence = true;

            if (current === ' ' || current === '\n'  || index >= text.length) {
                single_sentence = false;
            }

            if (current === '(') {
                reading_link_url = true;
                continue;
            }
            
            if (current === ')') {
                reading_link_url = false;
                continue;
            }           

            if (reading_link_url || ['[', ']', '#', '*'].includes(current)) {
                continue;
            }

            consecutive_chars++;
            if (single_sentence && consecutive_chars === max_chars) {
                lines++;
                consecutive_chars= 0;
            }

            if ([ '\n'].includes(current)) {
                lines++;
                consecutive_chars = 0;
            }

            processed++;
        }
        
        raw_pages.push(page);
        cursor = index;
    }

    if (raw_pages.length % 2 === 1) {
        raw_pages.push('');
    }
    
    return raw_pages;
}