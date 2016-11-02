(function () {
    let idGenerator = 0;
    class Extensible {
        constructor() {
            this.id = idGenerator++;
        }

        extend(template) {
            for (let key in template) {
                if (typeof(template[key]) == 'function') {
                    Object.getPrototypeOf(this)[key] = template[key];
                } else {
                    this[key] = template[key];
                }
            }
        }
    }

    return Extensible;
})();