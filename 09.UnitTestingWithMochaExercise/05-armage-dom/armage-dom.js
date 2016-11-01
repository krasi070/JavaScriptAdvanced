function nuke(selector1, selector2) {
    if (selector1 === selector2) return;
    console.log($(selector1).toArray());
    $(selector1).filter(selector2).remove();
}

module.exports = { nuke };