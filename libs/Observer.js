const Observer = (function () {
    const __Message = {};
    return {
        regist(type, fn) {
            if (!__Message[type]) {
                __Message[type] = [fn]
            } else {
                __Message[type].push(fn)
            }
        },
        fire(type, args) {
            if (!__Message[type]) {
                return;
            }
            const events = {
                type: type,
                args: args || {}
            };
            for (let index = 0; index < __Message[type].length; index++) {
                __Message[type][index].call(this, events);
            }
        },
        remove(type, fn) {
            if (__Message[type] instanceof Array) {
                for (let index = 0; index < __Message[type].length; index++) {
                    __Message[type][index] === fn && __Message[type].splice(index, 1);

                }
            }
        }
    }
})()
Observer.regist('test', (e) => {
    console.log(e.type, e.args.msg);
})
Observer.fire('test', { msg: 'ppm' })