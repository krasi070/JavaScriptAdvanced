class Console {
    static writeLine(str) {
        if (arguments.length == 1) {
            if (typeof(str) == 'string') {
                console.log(str);
            } else if (typeof(str) == 'object') {
                console.log(JSON.stringify(str));
            }
        } else if (arguments.length > 1) {
            if (typeof(str) != 'string') {
                throw new TypeError('Incorrect parameters!');
            } else {
                let args = Array.from(arguments);
                let template = args.shift();
                for (let i = 0; i < args.length; i++) {
                    let before = template;
                    template = template.replace(`{${i}}`, args[i]);
                    if (template == before) {
                        throw new RangeError('Too many parameters!');
                    }
                }

                if (template.match(/{[1-9]\d*}/)) {
                    throw new RangeError('Not enough parameters!');
                }

                console.log(template);
            }
        }
    }
}