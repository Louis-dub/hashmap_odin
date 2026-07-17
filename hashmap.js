import { LinkedList } from "./linkedlist.js";

class HashMap {
    constructor(loadFactor = 0.75, capacity = 16) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.buckets = Array.from({ length: this.capacity }, () => new LinkedList());
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    }

    grow() {
        this.capacity++;
        const oldBucket = this.buckets;
        this.buckets = Array.from({ length: this.capacity }, () => new LinkedList());

        for (let i = 0; i < oldBucket.length; i++) {
            while (oldBucket[i].head()) {
                let node = oldBucket[i].shift();
                this.set(node.key, node.value);
            }
        }
    }

    length() {
        let len = 0;

        for (let i = 0; i < this.capacity; i++)
            len += this.buckets[i].size();
        return len;
    }

    set(key, value) {
        const hash = this.hash(key);
        const bucket = this.buckets[hash];

        if (bucket.contains(key)) {
            const id = bucket.findIndex(key);
            bucket.removeAt(id);
            bucket.insertAt(id, [key, value]);
            return;
        }

        bucket.append(key, value);
        if (this.length() > this.capacity * this.loadFactor)
            this.grow();
    }

    get(key) {
        for (let i = 0; i < this.capacity; i++) {
            let node = this.buckets[i].contains(key);
            if (node)
                return node.value;
        }
        return null;
    }

    has(key) {
        for (let i = 0; i < this.capacity; i++)
            if (this.buckets[i].contains(key))
                return true;
        return false;
    }

    toString() {
        let string = "";
        for (let i = 0; i < this.buckets.length; i++)
            string += (`${i} : ${this.buckets[i].toString()}\n`);
        return string
    }
}

export { HashMap };