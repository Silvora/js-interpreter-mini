import { createInterface } from "readline"


export const startRepl = () => {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: '✨ '
    })
    rl.prompt()

    // rl.question('>>>>> ', function(prompt) {
    //     console.log('这是你输入的回答结果：' + prompt);
    // })


    rl.on('line', function (line) {
        console.log('这是用户输入的内容：' + line);
        rl.prompt()
    })

    rl.on('close', function () {
        console.log('💥💥💥Goodbye!💥💥💥');
    })

}

startRepl()