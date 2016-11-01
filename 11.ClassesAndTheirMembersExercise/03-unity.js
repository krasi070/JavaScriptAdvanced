class Rat {
    constructor(name) {
        this.name = name;
        this.unitedWith = [];
    }

    unite(other) {
        if (other instanceof Rat) {
            this.unitedWith.push(other);
        }
    }

    getRats() {
        return this.unitedWith;
    }

    toString() {
        let ratFriends = this.unitedWith.map(r => '##' + r.name);
        return `${this.name}\n${ratFriends.join('\n')}`;
    }
}