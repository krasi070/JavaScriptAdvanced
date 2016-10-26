function cars(input) {
    let carFactory = (function () {
        let cars = new Map();
        return {
            create: (name, parent) => {
                if (parent) {
                    cars.set(name, Object.create(cars.get(parent)));
                } else {
                    cars.set(name, {});
                }
            },
            set: (name, key, value) => {
                cars.get(name)[key] = value;
            },
            print: (name) => {
                let result = [];
                for (let key in cars.get(name)) {
                    result.push(`${key}:${cars.get(name)[key]}`);
                }

                console.log(result.join(', '))
            }
        };
    })();

    for (let line of input) {
        let args = line.split(' ');
        if (args.length == 2) {
            carFactory[args[0]](args[1]);
        } else {
            if (args[0] == 'create') {
                carFactory[args[0]](args[1], args[3]);
            } else {
                carFactory[args[0]](args[1], args[2], args[3]);
            }
        }
    }
}