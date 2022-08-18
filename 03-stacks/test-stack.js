const Stack = require('./Stack')

const numbers = new Stack()

numbers.push(321)
numbers.push(322)
numbers.push(323)

while (numbers.peek()) {
    let top = numbers.pop()
    console.log(top.getValue())
}