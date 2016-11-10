import { AddableToSelector } from './AddableToSelector';

export class Post extends AddableToSelector {
    constructor(title, body, author) {
        super();
        this.title = title;
        this.body = body;
        this.author = author;
    }

    addToSelector(selector) {
        $(selector)
            .append($('<div class="post ' + this.author + '">')
                .append($('<h3 class="title">').text(this.title))
                .append($('<p class="body">').text(this.body))
                .append($('<p class="author">').text(this.author)));
    }
}