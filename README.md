# ts-merge-collections

TypeScript project for merging three numeric collections into ascending order **without using `.sort()`**.

- `collection_1` and `collection_3` are **ascending**
- `collection_2` is **descending** (we read it from end to start)
- Time complexity: **O(n1+n2+n3)**

## Run

```bash
npm install
npm run test
npm run build && npm start
```

## Files

- `src/merge.ts` — three-pointer merge implementation
- `src/index.ts` — small runnable example
- `test/merge.test.ts` — Vitest unit tests
- `tsconfig.json` — ESM config (`"type": "module"` in package.json)
