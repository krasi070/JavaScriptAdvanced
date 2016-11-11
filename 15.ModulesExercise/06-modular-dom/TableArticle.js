import { Article } from './Article';

export class TableArticle extends Article {
    constructor(title, content) {
        super(title, content);
        this.headings = null;
        this.data = null;
    }

    loadData(headings, data) {
        this.headings = headings;
        this.data = data;
    }

    getElementString() {
        let table = $('<table class="data">');
        let firstRow = $('<tr>');
        for (let heading of this.headings) {
            $(firstRow).append($('<th>').text(heading));
        }

        $(table).append($(firstRow));
        for (let dataObj of this.data) {
            let currRow = $('<tr>');
            for (let heading of this.headings) {
                let propName = heading.replace(' ', '').toLowerCase();
                $(currRow).append($('<td>').text(dataObj[propName]));
            }

            $(table).append($(currRow));
        }

        return $(super.getElementString())
            .append($('<div class="table">')
                .append($(table)));
    }
}