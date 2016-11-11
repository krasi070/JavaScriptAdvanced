import { Article } from './Article';

export class ImageArticle extends Article {
    constructor(title, content, image) {
        super(title, content);
        this.image = image;
    }

    getElementString() {
        return $('<div class="article">')
            .append($('<div class="article-title">').text(this.title))
            .append($('<div class="image">')
                .append($('<img src="' + this.image + '">')))
            .append($('<p>').text(this.content));
    }
}