function commandProcessor(input) {
    let commands = (function () {
        let text = '';
        return {
            append: (str) => text += str,
            removeStart: (n) => text = text.substr(n),
            removeEnd: (n) => text = text.substr(0, text.length - n),
            print: () => console.log(text)
        };
    })();

    for (let command of input) {
        command = command.split(' ');
        let functionName = command[0];
        command.length > 1 ?
            commands[functionName](command[1]) :
            commands[functionName]();
    }
}