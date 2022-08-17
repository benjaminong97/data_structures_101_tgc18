const LinkedList = require('./LinkedList')
const Node = require('./Node')

// queue only those actions are allowed
// add to the back - enqueue()
// remove from the front - dequeue()
// see whats on the front - peek()

class Queue {
    constructor() {
        this.data = new LinkedList()
    }

    // assume the new data is a value - like integer, float, etc
    enqueue (newData) {
        this.data.push(new Node(newData))
    }

    dequeue() {
        //retrieve what is at the front, delete the front of the linked list
        const front = this.data.getAt(0)

        //delete the front of the linked list
        this.data.deleteAt(0)
        return front.getValue(); // try to hide the inner workings --> hence why returning the value and not the entire node 
    }

    peek() {
        // reveal what is at the front of the queue 

        // if (this.data.getAt(0) != null){
        //     return this.data.getAt(0).getValue()
        // } else {
        //     return null
        // }

        return this.data.getAt(0)?.getValue()
        // --> js will terminate and return null with the expression before ?
        
    }
}

module.exports = Queue
