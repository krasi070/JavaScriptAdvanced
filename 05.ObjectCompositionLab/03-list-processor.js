function listProcessor(input) {
    let listCommands = (function () {
        let list = [];
        return {
            add: (str) => list.push(str),
            remove: (str) => list = list.filter(s => s != str),
            print: () => console.log(list.join(','))
        };
    })();

    for (let line of input) {
        let args = line.split(' ');
        args.length > 1 ?
            listCommands[args[0]](args[1]) :
            listCommands[args[0]]();
    }
}