class Entity {
    constructor(name) {
        if (new.target === Entity) {
            throw new Error('Entity is an abstract class!');
        }

        this.name = name;
    }

    saySomething() {
        return undefined;
    }
}

module.exports = Entity;