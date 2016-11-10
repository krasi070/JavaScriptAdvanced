export class Turtle {
    constructor(name, age, gender) {
        if (new.target === Turtle) {
            throw new TypeError('Turtle is an abstract class!');
        }

        this._name = name;
        this._age = age;
        this._gender = gender;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    get gender() {
        return this._gender;
    }

    grow(years) {
        this._age += years;
    }

    toString() {
        return `Turtle: ${this.name}\nAged - ${this.age}; Gender - ${this.gender}`;
    }
}