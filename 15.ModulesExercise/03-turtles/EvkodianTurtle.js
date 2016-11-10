import { Turtle } from './Turtle';

export class EvkodianTurtle extends Turtle {
    constructor(name, age, gender, evkodiumValue) {
        super(name, age, gender);
        this._evkodiumValue = evkodiumValue;
    }

    get evkodium() {
        return {
            value: this._evkodiumValue,
            density: this.gender == 'male' ? this.age * 3 : this.age * 2
        };
    }

    toString() {
        return `${super.toString()}\nEvkodium: ${this.evkodium.value * this.evkodium.density}`;
    }
}