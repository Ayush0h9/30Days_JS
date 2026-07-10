/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const map = {};

    // Add all objects from arr1
    for (const obj of arr1) {
        map[obj.id] = obj;
    }

    // Merge objects from arr2
    for (const obj of arr2) {
        if (map[obj.id]) {
            map[obj.id] = { ...map[obj.id], ...obj };
        } else {
            map[obj.id] = obj;
        }
    }

    // Return sorted array
    return Object.values(map).sort((a, b) => a.id - b.id);
};