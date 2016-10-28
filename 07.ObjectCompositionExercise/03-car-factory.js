function carFactory(carObj) {
    let smallEngine = { power: 90, volume: 1800 };
    let normalEngine = { power: 120, volume: 2400 };
    let monsterEngine = { power: 200, volume: 3500 };
    let hatchback = { type: 'hatchback', color: '' };
    let coupe = { type: 'coupe', color: '' };

    let power = carObj.power;
    delete carObj.power;
    let color = carObj.color;
    delete carObj.color;
    let wheelSize = carObj.wheelsize;
    delete carObj.wheelsize;

    if (power <= smallEngine.power) {
        carObj.engine = smallEngine;
    } else if (power <= normalEngine.power) {
        carObj.engine = normalEngine;
    } else {
        carObj.engine = monsterEngine;
    }

    if (carObj.carriage == hatchback.type) {
        hatchback.color = color;
        carObj.carriage = hatchback;
    } else {
        coupe.color = color;
        carObj.carriage = coupe;
    }

    wheelSize = Math.floor(wheelSize) % 2 != 1 ?
        Math.floor(wheelSize) - 1 :
        Math.floor(wheelSize);
    carObj.wheels = [wheelSize, wheelSize, wheelSize, wheelSize];

    return carObj;
}