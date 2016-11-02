class SortedList {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(element) {
        this.list.push(element);
        this.size++;
        this.sort();
    }

    remove(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Index is out of scope!');
        }

        this.list = this.list.filter((e, i) => i != index);
        this.size--;
        this.sort();
    }

    get(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Index is out of scope!');
        }

        return this.list[index];
    }

    sort() {
        this.list = this.list.sort((a, b) => a - b);
    }
}