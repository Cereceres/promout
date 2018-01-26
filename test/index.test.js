const assert = require('assert');

const promout = require('../index');

describe('test to promout', () => {
    it('should resolve the promise after timeout', async() => {
        const res = {};
        const init = Date.now();
        const _res = await promout(res, 2000);
        const finish = Date.now();
        assert(finish - init > 2000);
        assert(_res === res);
    });

    it('should reject the promise after timeout', async() => {
        const res = {};
        const init = Date.now();
        const _res = await promout.reject(res, 2000).catch((res) => res);
        const finish = Date.now();
        assert(finish - init > 2000);
        assert(_res === res);
    });
});
