import { BaseElement } from './BaseElement';

export class Article extends BaseElement {
    constructor(title, content) {
        super();
        this.title = title;
        this.content = content;
        this.timestamp = new Date();
    }

    getElementString() {
        return $('<div class="article">')
            .append($('<div class="article-title">').text(this.title))
            .append($('<p>').text(this.content));
    }
}