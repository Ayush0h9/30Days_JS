/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const ans = new Array(functions.length);
        let count = 0;

        if (functions.length === 0) {
            resolve([]);
            return;
        }

        for (let i = 0; i < functions.length; i++) {
            functions[i]()
                .then((res) => {
                    ans[i] = res;
                    count++;

                    if (count === functions.length) {
                        resolve(ans);
                    }
                })
                .catch((err) => reject(err));
        }
    });
};