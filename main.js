import { HashMap } from "./hashmap.js";

const hashMap = new HashMap();

hashMap.set("apple", "value1");
hashMap.set("banana", "value2");
hashMap.set("carrot", "value3");
hashMap.set("dog", "value4");
hashMap.set("elephant", "value5");
hashMap.set("frog", "value6");
hashMap.set("grape", "value7");
hashMap.set("hat", "value8");
hashMap.set("ice cream", "value9");
hashMap.set("jacket", "value10");
hashMap.set("kite", "value11");
hashMap.set("lion", "value12");

console.log(hashMap.toString());

hashMap.set("apple", "value13");
hashMap.set("moon", "value14");

console.log(hashMap.toString());
console.log(hashMap.entries());