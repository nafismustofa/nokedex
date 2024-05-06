export function formatText(text) {
    if (text.includes("-")) {
        text = text.replace('-', " ");
    }

    let words = text.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);     
    }
    return words.join(' '); 
}