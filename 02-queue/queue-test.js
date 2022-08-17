const Queue = require('./Queue')

// notice how linked list and node doesnt need to be important 
//(end using programmer doesnt need to know how the node and list works)

const peopleQueue = new Queue()
peopleQueue.enqueue('John')
peopleQueue.enqueue('Peter')
peopleQueue.enqueue('Mary')

// // queue traversal
// while (peopleQueue.peek()) {
//     let front = peopleQueue.dequeue()
//     console.log(front)

// }

function printQueue(q) {
    let q2 = new Queue()
    //queue traversal
    while(q.peek()) {
        let front = q.dequeue()
        q2.enqueue(front)
        console.log(front)
    }
    q=q2
}

printQueue(peopleQueue)