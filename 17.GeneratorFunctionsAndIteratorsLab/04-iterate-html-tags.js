function* iterateHTMLTags(html) {
    let regex = /<[^<]+>/g;
    let match;
    while (match = regex.exec(html)) {
        yield match[0];
    }
}