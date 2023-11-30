class Node<T> {
    data: T;
    next: Node<T> | null
    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

export default class SinglyLinkedList<T> {
    public length: number;
    head: Node<T> | null

    constructor() {
        this.head = null;
        this.length =0
    }
    log(): void {
        let curr = this.head
        while(curr) {
            console.log(curr.data)
            curr = curr.next
        }
    }
    prepend(item: T): void {
        let newNode = new Node(item);
        if(this.head) {
            newNode.next = this.head;
        }
        this.head = newNode;
        this.length += 1;
        this.log()


}
    insertAt(item: T, idx: number): void {
        let newNode = new Node(item);
        if(!this.head && idx != 0) return undefined;
        if(idx == 0) {
            newNode.next = this.head;
            this.head = newNode;
            return undefined
        }
        let i = 0;
        let curr  = this.head;

        while(curr && i <= idx) {
            if(i == idx -1) {
                newNode.next = curr?.next;
                curr.next = newNode;
                this.length += 1;
            }
            i++;
            curr = curr.next;
        }
        this.log()

}
    append(item: T): void {
        const newNode = new Node(item);
        let curr = this.head;
        if(!curr) {
            this.head = newNode;
        }
        else {
            while(curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }
        this.length += 1;

        this.log()
    }
    remove(item: T): T | undefined {
       if(!this.head) return undefined;
       if(this.head.data == item) {
            let ret = this.head.data;
            this.head = this.head.next;
            this.length -= 1;

            return ret            

       }
       let curr = this.head;
       while(curr?.next) {
        if(curr.next.data == item) {
            let ret = curr.next.data;
            curr.next = curr?.next.next;
            this.length -= 1;
            return ret;

        }
        curr = curr?.next;
       }
       return undefined

}
    get(idx: number): T | undefined {
        let i = 0;
        let curr = this.head;
        if(!this.head) return undefined;
        while(curr){
            if(i == idx) {
                return curr.data;
            }
            curr = curr.next;
            i++;
        }
        this.log()

        return undefined
}
    removeAt(idx: number): T | undefined {
        if(!this.head && idx != 0) return undefined;
        if(idx == 0) {
            let retV = this.head?.data;
            this.head = this.head?.next || null;
            this.length -= 1;
            return retV
        }
        let i = 0;
        let curr  = this.head;

        while(curr && i <= idx) {
            if(i == idx -1) {
                let ret  = curr?.next?.data;
                curr.next = curr?.next?.next || null;
                this.length -= 1;
                return ret
            }
            i++;
            curr = curr.next;
        }
        return undefined
}
}