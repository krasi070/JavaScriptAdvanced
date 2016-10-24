function wikiParser(selector) {
    let firstLinkPattern = /\[\[(([^'=\[\]]+?)\|([^'=\[\]]+?))]]/g;
    let secondLinkPattern = /\[\[([^|'=\[\]]+?)]]/g;
    let heading1Pattern = /=([^'=\[\]]+?)=/g;
    let heading2Pattern = /==([^'=\[\]]+?)==/g;
    let heading3Pattern = /===([^'=\[\]]+?)===/g;
    let italicPattern = /''([^'=\[\]]+?)''/g;
    let boldPattern = /'''([^'=\[\]]+?)'''/g;

    Array.from(document.querySelectorAll(selector))[0].innerHTML = $(selector).text()
        .replace(heading3Pattern, (m, t) => `<h3>${t}</h3>`)
        .replace(heading2Pattern, (m, t) => `<h2>${t}</h2>`)
        .replace(heading1Pattern, (m, t) => `<h1>${t}</h1>`)
        .replace(boldPattern, (m, t) => `<b>${t}</b>`)
        .replace(italicPattern, (m, t) => `<i>${t}</i>`)
        .replace(firstLinkPattern, (m, g, l, t) => `<a href="/wiki/${l}">${t}</a>`)
        .replace(secondLinkPattern, (m, t) => `<a href="/wiki/${t}">${t}</a>`);
}