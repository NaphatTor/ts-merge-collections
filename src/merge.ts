// Merge three collections into ascending order without using sort()
// Conditions:
// - collection_1: ascending
// - collection_2: descending
// - collection_3: ascending
export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const res: number[] = [];
  let i = 0;                        // c1 pointer (asc)
  let j = collection_2.length - 1;  // c2 pointer (read from end to get asc)
  let k = 0;                        // c3 pointer (asc)

  const at = (arr: number[], idx: number): number =>
    idx >= 0 && idx < arr.length ? arr[idx] : Number.POSITIVE_INFINITY;

  while (i < collection_1.length || j >= 0 || k < collection_3.length) {
    const a = at(collection_1, i);
    const b = at(collection_2, j);
    const c = at(collection_3, k);

    if (a <= b && a <= c) { res.push(a); i++; }
    else if (b <= a && b <= c) { res.push(b); j--; }
    else { res.push(c); k++; }
  }
  return res;
}
