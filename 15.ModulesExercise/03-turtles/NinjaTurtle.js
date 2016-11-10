import { Turtle } from './Turtle';

export class NinjaTurtle extends Turtle {
    constructor(name, age, gender, maskColor, weapon) {
        super(name, age, gender);
        this.maskColor = maskColor;
        this.weapon = weapon;
        this.level = 0;
    }

    grow(years) {
        this._age += years;
        this.level += years;
    }

    toString() {
        let str = super.toString() + '\n';
        if (this.level < 25) {
            str += `${this.name.slice(0, 3)} wears a ${this.maskColor} mask, and is an apprentice with the ${this.weapon}.`;
        } else if (this.level >= 25 && this.level < 100) {
            str += `${this.name.slice(0, 3)} wears a ${this.maskColor} mask, and is smokin strong with the ${this.weapon}.`;
        } else {
            str += `${this.name.slice(0, 3)} wears a ${this.maskColor} mask, and is BEYOND GODLIKE with the ${this.weapon}.`;
        }

        return str;
    }
}