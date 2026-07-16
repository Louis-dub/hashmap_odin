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
    }

    toString() {
        let string = "";
        for (let i = 0; i < this.buckets.length; i++)
            string += (`${i} : ${this.buckets[i].toString()}\n`);
        return string
    }
}

export { HashMap };