class LinkedList {
    constructor() {
        //if head is null, linked list is empty
        this.head = null
    }

    push(newNode) {
        // if list is empty
        if (this.head == null) {
            this.head = newNode
        }
        else {
            let current = this.head
            while (current.getNext() != null) {
                current = current.getNext()
            }
            //when loop is complete, current refers to the last node in the list
            current.next = newNode
        }
    }

    print() {
        let current = this.head
        while (current != null) {
            console.log(current.getValue())
            current = current.getNext()
        } 
    }

    insertAt(index, newNode) {
        if (this.head == null) {
            return;
        }
        else {
            let current = this.head
            for (let i=0; i < index -1; i++) {
                current = current.getNext()
            }
            newNode.setNext(current.getNext())
            current.setNext(newNode)
        }
    }

    deleteAt(index) {
        if (this.head == null) {
            return
        }
        if (index == 0) {
            this.head = this.head.getNext()
            // no need to explicitly delete the old head
            // deleted automatically by garbage collection

        } else {
            let current = this.head
            for (let i = 0; i < index -1; i++) {
                current = current.getNext()
            }

            current.setNext(current.getNext().getNext())
        }
        }
    }


module.exports = LinkedList