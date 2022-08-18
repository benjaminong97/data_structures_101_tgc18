// node must have the data it must store and the pointer to its neighbor

class Node {
    constructor(value, next= null) {
        this.value = value
        this.next = next
    }

    //interface of the class --> how other code can make use of the class 
    //(the functionality of the class)
    setValue(value) {
        this.value = value
    }

    getValue() {
        return this.value

    }

    getNext() {
        return this.next
    }

    // the next argument is supposed to be either a node or 'null'
    setNext(next) {
        this.next = next
    }
}

module.exports = Node