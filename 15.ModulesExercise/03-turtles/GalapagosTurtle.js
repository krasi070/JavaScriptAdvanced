import { Turtle } from './Turtle';

export class GalapagosTurtle extends Turtle {
    constructor(name, age, gender) {
        super(name, age, gender);
        this._thingsEaten = [];
    }

    get thingsEaten() {
        return this._thingsEaten;
    }

    eat(food) {
        this._thingsEaten.push(food);
    }

    grow(years) {
        this._age += years;
        this._thingsEaten = [];
    }

    toString() {
        return `${super.toString()}\nThings, eaten this year: ${this.thingsEaten.join(', ')}`;
    }
}