function traverseDOM(selector) {
    $(selector).addClass('highlight');
    let children = $(selector).children().toArray();
    if (children.length > 0) {
        for (let child of children) {
            if ($(child).children().toArray().length > 0) {
                traverseDOM(child);
                return;
            }
        }

        traverseDOM(children[0]);
    }
}