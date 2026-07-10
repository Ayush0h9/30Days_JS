/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, depth) {
    const result = [];

    function dfs(current, d) {
        for (const item of current) {
            if (Array.isArray(item) && d > 0) {
                dfs(item, d - 1);
            } else {
                result.push(item);
            }
        }
    }

    dfs(arr, depth);
    return result;
};