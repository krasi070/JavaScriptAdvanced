import { BaseElement } from './BaseElement';

export class TitleBar extends BaseElement {
    constructor(title) {
        super();
        this.title = title;
        this.links = [];
    }

    addLink(href, name) {
        this.links.push($('<a href="' + href + '" class="menu-link">').text(name));
    }

    getElementString() {
        let nav = $('<nav class="menu">');
        let isFirst = true;
        for (let link of this.links) {
            if (isFirst) {
                nav.append($(link));
                isFirst = false;
            } else {
                nav.append('|').append($(link));
            }
        }

        return $('<header class="header">')
            .append($('<div>')
                .append($('<span class="title">').text(this.title)))
            .append($('<div>')
                .append($(nav)));
    }
}