export class AddableToSelector {
    constructor() {
        if(new.target === AddableToSelector) {
            throw new TypeError('AddableToSelector is an abstract class!');
        }
    }

    addToSelector(selector) {
        return undefined;
    }
}