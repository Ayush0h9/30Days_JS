var TimeLimitedCache = function () {
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration
 * @return {boolean}
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    const now = Date.now();
    const exists =
        this.cache.has(key) && this.cache.get(key).expire > now;

    this.cache.set(key, {
        value: value,
        expire: now + duration
    });

    return exists;
};

/** 
 * @param {number} key
 * @return {number}
 */
TimeLimitedCache.prototype.get = function (key) {
    const data = this.cache.get(key);

    if (!data || data.expire <= Date.now()) {
        return -1;
    }

    return data.value;
};

/** 
 * @return {number}
 */
TimeLimitedCache.prototype.count = function () {
    const now = Date.now();
    let count = 0;

    for (const data of this.cache.values()) {
        if (data.expire > now) {
            count++;
        }
    }

    return count;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * var param_1 = obj.set(key,value,duration)
 * var param_2 = obj.get(key)
 * var param_3 = obj.count()
 */