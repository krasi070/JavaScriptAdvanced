let data = require('./data');

function sort(property) {
    return data.sort((a, b) => {
        return a[property].localeCompare(b[property]);
    });
}

function filter(property, value) {
    return data.filter(d => d[property] && d[property] == value);
}

module.exports = {
    sort,
    filter
};