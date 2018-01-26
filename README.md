# promout
return a promise what is resolved after timeout milliseconds 

# Usage 

```js
// resolve
const res = {};
const init = Date.now();
const _res = await promout(res, 2000);
const finish = Date.now();
assert(finish - init > 2000);
assert(_res === res);
// with reject
const res = {};
const init = Date.now();
const _res = await promout.reject(res, 2000).catch((res) => res);
const finish = Date.now();
assert(finish - init > 2000);
assert(_res === res);
```
# API

## promout(res, timeout) -> Promise
The promise is resolved with res given at timeout milliseconds.

## promout.reject(res, timeout) -> Promise[rejected]
The promise is rejected with res given at timeout milliseconds.