function argumentInfo() {
    let typeCounter = {};
    for (let arg of argumentInfo.arguments) {
        console.log(`${typeof(arg)}: ${arg}`);
        typeCounter[typeof(arg)] ?
            typeCounter[typeof(arg)]++ :
            typeCounter[typeof(arg)] = 1;
    }

    let sortedTypes = Object.keys(typeCounter).sort((a, b) => typeCounter[b] - typeCounter[a]);
    for (let type of sortedTypes) {
        console.log(`${type} = ${typeCounter[type]}`);
    }
}