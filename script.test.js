import { HashMap } from "./hashmap.js";

const hashMap = new HashMap();

test("Hash method with simple key", () => {
    expect(hashMap.hash("louis")).toBe(12);
});

test("Hash method with complex key", () => {
    expect(hashMap.hash("z3lq2LIt);v")).toBe(1);
});

test("Set method with several keys", () => {
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
    expect(hashMap.toString()).toEqual(
`0 : null
1 : ( elephant : value5 ) -> null
2 : null
3 : ( carrot : value3 ) -> null
4 : ( frog : value6 ) -> null
5 : ( banana : value2 ) -> null
6 : null
7 : null
8 : null
9 : null
10 : ( apple : value1 ) -> null
11 : ( grape : value7 ) -> ( hat : value8 ) -> null
12 : ( dog : value4 ) -> ( lion : value12 ) -> null
13 : ( ice cream : value9 ) -> null
14 : ( jacket : value10 ) -> null
15 : ( kite : value11 ) -> null
`);
});

test("Set method with an existing value", () => {
    hashMap.set("apple", "value13");
    expect(hashMap.toString()).toEqual(
`0 : null
1 : ( elephant : value5 ) -> null
2 : null
3 : ( carrot : value3 ) -> null
4 : ( frog : value6 ) -> null
5 : ( banana : value2 ) -> null
6 : null
7 : null
8 : null
9 : null
10 : ( apple : value13 ) -> null
11 : ( grape : value7 ) -> ( hat : value8 ) -> null
12 : ( dog : value4 ) -> ( lion : value12 ) -> null
13 : ( ice cream : value9 ) -> null
14 : ( jacket : value10 ) -> null
15 : ( kite : value11 ) -> null
`);
});

test("Set method when capacity is so little", () => {
    hashMap.set("moon", "value14");
expect(hashMap.toString()).toEqual(
`0 : null
1 : null
2 : ( lion : value12 ) -> null
3 : ( kite : value11 ) -> null
4 : null
5 : null
6 : null
7 : null
8 : ( apple : value13 ) -> null
9 : ( elephant : value5 ) -> ( moon : value14 ) -> null
10 : null
11 : ( ice cream : value9 ) -> null
12 : null
13 : null
14 : ( dog : value4 ) -> ( jacket : value10 ) -> null
15 : ( banana : value2 ) -> ( carrot : value3 ) -> null
16 : ( frog : value6 ) -> null
17 : ( grape : value7 ) -> ( hat : value8 ) -> null
`);
});


test("Get method", () => {
    expect(hashMap.get("apple")).toBe("value13");
});

test("Get method with a key that does not exist", () => {
    expect(hashMap.get("test")).toBe(null);
});

test("Has method", () => {
    expect(hashMap.has("apple")).toBe(true);
});

test("Has method with a key that does not exist", () => {
    expect(hashMap.has("test")).toBe(false);
});

test("Remove method", () => {
    expect(hashMap.remove("carrot")).toBe(true);
    expect(hashMap.toString()).toBe(
`0 : null
1 : null
2 : ( lion : value12 ) -> null
3 : ( kite : value11 ) -> null
4 : null
5 : null
6 : null
7 : null
8 : ( apple : value13 ) -> null
9 : ( elephant : value5 ) -> ( moon : value14 ) -> null
10 : null
11 : ( ice cream : value9 ) -> null
12 : null
13 : null
14 : ( dog : value4 ) -> ( jacket : value10 ) -> null
15 : ( banana : value2 ) -> null
16 : ( frog : value6 ) -> null
17 : ( grape : value7 ) -> ( hat : value8 ) -> null
`);
});

test("Remove method with a key that does not exist", () => {
    expect(hashMap.remove("test")).toBe(false);
});

test("Keys method", () => {
    expect(hashMap.keys()).toEqual([
        "lion", "kite", "apple", "elephant", "moon", "ice cream", "dog", "jacket", "banana", "frog", "grape", "hat"
    ]);
});

test("Clear method", () => {
    hashMap.clear();
    expect(hashMap.toString()).toBe(
`0 : null
1 : null
2 : null
3 : null
4 : null
5 : null
6 : null
7 : null
8 : null
9 : null
10 : null
11 : null
12 : null
13 : null
14 : null
15 : null
16 : null
17 : null
`);
});
