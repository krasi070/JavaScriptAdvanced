(function () {
    String.prototype.ensureStart = function (str) {
        if (this.indexOf(str) != 0) {
            return str + this;
        }

        return this + '';
    };

    String.prototype.ensureEnd = function (str) {
        if (this.lastIndexOf(str) + str.length != this.length) {
            return this + str;
        }

        return this + '';
    };

    String.prototype.isEmpty = function () {
        return this.length == 0;
    };

    String.prototype.truncate = function (n) {
        let truncatedStr = this;
        if (this.length > n && n > 3) {
            while (truncatedStr.length + 3 > n) {
                let index = truncatedStr.lastIndexOf(' ');
                if (index == -1) {
                    break;
                }

                truncatedStr = truncatedStr.substr(0, index);
            }

            truncatedStr = truncatedStr.substr(0, n - 3) + '...';
        } else if (n < 3) {
            truncatedStr = '.'.repeat(n);
        }

        return truncatedStr + '';
    };

    String.format = function () {
        let args = Array.from(String.format.arguments);
        let str = args.shift();
        for (let i = 0; i < args.length; i++) {
            str = str.replace(`{${i}}`, args[i]);
        }

        return str;
    };
})();

let str = 'my string';
str = str.ensureEnd('ing');
console.log(str);
str = str.ensureEnd('.');
console.log(str);
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox', 'quick', 'brown');
str = String.format('jumps {0} {1}', 'dog');
