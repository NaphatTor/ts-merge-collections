import { merge } from "./merge.js";
const c1 = [1, 4, 7];
const c2 = [9, 5, 3, 2]; // descending
const c3 = [0, 6, 8];
console.log(merge(c1, c2, c3)); // -> [0,1,2,3,4,5,6,7,8,9]
