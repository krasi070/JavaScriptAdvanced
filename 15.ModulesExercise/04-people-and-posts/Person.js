import { AddableToSelector } from './AddableToSelector';

export class Person extends AddableToSelector {
    constructor(name, age) {
        super();
        this.name = name;
        this.age = age;
    }

    addToSelector(selector) {
        $(selector)
            .append($('<div class="person ' + this.name + '">')
                .append($('<p class="name">').text(this.name))
                .append($('<p class="age">').text(this.age))
                .append($('<div class="posts ' + this.name + '">')));
    }
}