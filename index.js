const prom = module.exports = (res, timeout = 1000) => new Promise(
    (resolve) => {
        const timer = setTimeout(() => resolve(timer), timeout);
    }
)
    .then((timer) => {
        clearTimeout(timer);
        return res;
    });

prom.reject = (res, timeout = 1000) => new Promise(
    (resolve) => {
        const timer = setTimeout(() => resolve(timer), timeout);
    }
)
    .then((timer) => {
        clearTimeout(timer);
        return Promise.reject(res);
    });
