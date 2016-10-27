(function () {
    let recipes = {
        apple:
        [
            {name: 'carbohydrate', needed: 1},
            {name: 'flavour', needed: 2}
        ],
        coke:
        [
            {name: 'carbohydrate', needed: 10},
            {name: 'flavour', needed: 20}
        ],
        burger:
        [
            {name: 'carbohydrate', needed: 5},
            {name: 'fat', needed: 7},
            {name: 'flavour', needed: 3}
        ],
        omelet:
        [
            {name: 'protein', needed: 5},
            {name: 'fat', needed: 1},
            {name: 'flavour', needed: 1}
        ],
        cheverme:
        [
            {name: 'protein', needed: 10},
            {name: 'carbohydrate', needed: 10},
            {name: 'fat', needed: 10},
            {name: 'flavour', needed: 10}
        ]
    };
    let breakfastRobot = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
        restock: (microElement, quantity) => {
            breakfastRobot[microElement] += Number(quantity);
            return 'Success';
        },
        report: () => {
            return `protein=${breakfastRobot.protein} carbohydrate=${breakfastRobot.carbohydrate} fat=${breakfastRobot.fat} flavour=${breakfastRobot.flavour}`;
        },
        prepare: (recipe, quantity) => {
            let count = 0;
            for (let ingredient of recipes[recipe]) {
                if (breakfastRobot[ingredient.name] >= ingredient.needed * quantity) {
                    count++;
                } else {
                    return `Error: not enough ${ingredient.name} in stock`;
                }
            }

            if (count == recipes[recipe].length) {
                for (let ingredient of recipes[recipe]) {
                    breakfastRobot[ingredient.name] -= ingredient.needed * quantity;
                }

                return 'Success';
            }
        }
    };

    return function (line) {
        let args = line.split(' ');
        if (args.length == 3) {
            args[2] = Number(args[2]);
            return breakfastRobot[args[0]](args[1], args[2]);
        } else {
            return breakfastRobot[args[0]]();
        }
    }
})();