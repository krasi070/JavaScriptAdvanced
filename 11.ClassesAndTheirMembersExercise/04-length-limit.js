class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    increase(lengthToAdd) {
        this.innerLength += lengthToAdd;
    }

    decrease(lengthToSubtract) {
        if (this.innerLength - lengthToSubtract < 3) {
            this.innerLength = 0;
        } else {
            this.innerLength -= lengthToSubtract;
        }
    }

    toString() {
        if (this.innerString.length > this.innerLength) {
            return this.innerString.substr(0, this.innerLength) + '...';
        }

        return this.innerString;
    }

}