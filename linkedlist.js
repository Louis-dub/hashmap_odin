class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.headNode = null;
    }

    append(key, value) {
        let node = this.headNode;
        const newNode = new Node(key, value);

        if (!node) {
            this.headNode = newNode;
            return;
        }
        while (node.nextNode)
            node = node.nextNode;
        node.nextNode = newNode;
    }

    prepend(key, value) {
        const newNode = new Node(key, value);
        newNode.nextNode = this.headNode;
        this.headNode = newNode;
    }

    size() {
        let size = 0;
        let node = this.headNode;

        while (node) {
            size++;
            node = node.nextNode;
        }
        return size;
    }

    head() {
        if (!this.headNode)
            return undefined;
        return this.headNode;
    }

    tail() {
        let node = this.headNode;

        if (node === null)
            return undefined;
        while (node.nextNode)
            node = node.nextNode;
        return node;
    }

    at(index) {
        let node = this.headNode;
        let i = 0;

        while(node && i !== index) {
            node = node.nextNode;
            i++;
        }
        if (node === null)
            return undefined;
        return node;
    }

    pop() {
        let node = this.headNode;

        if (!node)
            return undefined;
        let nextNode = node.nextNode;
        if (!nextNode) {
            this.headNode = null;
            return node;
        }
        while (nextNode.nextNode) {
            node = nextNode;
            nextNode = node.nextNode;
        }
        node.nextNode = null;
        return nextNode;
    }

    shift() {
        const node = this.headNode;

        if (!node)
            return undefined;
        this.headNode = node.nextNode;
        return node;
    }

    contains(key) {
        let node = this.headNode;
        
        if (!node)
            return false;
        while(node && node.key !== key)
            node = node.nextNode;
        if (!node)
            return false;
        return node;
    }

    findIndex(key) {
        let node = this.headNode;
        let i = 0;
        
        if (!node)
            return -1;
        while(node && node.key !== key) {
            node = node.nextNode;
            i++
        }
        if (!node)
            return -1;
        return i;
    }

    toString() {
        let node = this.headNode;

        if (!node)
            return "null";
        const arr = [];
        while(node) {
            arr.push(`( ${node.key} : ${node.value} )`);
            node = node.nextNode;
        }
        arr.push("null");
        return arr.join(" -> ");
    }

    insertAt(index, ...values) {
        if (index < 0)
            throw new RangeError("Index out of bounds");

        if (index === 0) {
            values.slice().reverse().forEach(value => {
                this.prepend(value[0], value[1]);
            });
            return;
        }

        let node = this.headNode;
        let nextNode = this.headNode;
        let i = 0;

        while(nextNode && i < index) {
            i++;
            node = nextNode;
            nextNode = node.nextNode;
        }
        if (!nextNode)
            throw new RangeError("Index out of bounds");
        values.forEach(value => {
            let newNode = new Node(value[0], value[1]);
            node.nextNode = newNode;
            newNode.nextNode = nextNode;
            node = newNode;
        });
    }

    removeAt(index) {
        if (index < 0 || !this.headNode)
            throw new RangeError("Index out of bounds");

        if (index === 0) {
            this.headNode = this.headNode.nextNode;
            return;
    }


        let node = this.headNode;
        let nextNode = this.headNode;
        let i = 0;

        while(nextNode && i < index) {
            i++;
            node = nextNode;
            nextNode = node.nextNode;
        }
        if (!nextNode)
            throw new RangeError("Index out of bounds");
        node.nextNode = nextNode.nextNode;
    }
}

export { LinkedList };