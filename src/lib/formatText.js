export function formatText(text) {
    if (text.includes('-')) {
        text = text.replace(/-/g, ' ');
    }

    let words = text.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);     
    }
    return words.join(' '); 
}

export function formatTextReverse(text) {
    text = text.toLowerCase();
    if (text.includes(" ")) {
        text = text.replace(/ /g, '-');
    }
    if (text.includes(".")) {
        text = text.replace(/./g, '');
    }

    return text;
}