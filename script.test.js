import { HashMap } from "./hashmap.js";

const hashMap = new HashMap();

test("Hash method with simple key", () => {
    expect(hashMap.hash("louis")).toBe(12);
});

test("Hash method with complex key", () => {
    expect(hashMap.hash("z3lq2LIt);v")).toBe(1);
});
