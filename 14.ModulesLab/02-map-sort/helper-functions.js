function mapSort(map, sortFunction) {
    if (sortFunction === undefined) {
        map = new Map([...map.entries()].sort());
    } else {
        map = new Map([...map.entries()].sort((a, b) => sortFunction(a, b)));
    }

    return map;
}

module.exports = { mapSort };