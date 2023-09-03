const arr = [1, 2, 3, 4, 5];


Array.prototype.myMap = function (fn) {
    if (!Array.isArray(this)) {
        console.warn(`TypeError: ${this}.myMap is not a function`);
        return;
    }
    const result = [];

    for (item of this) {
        result.push(fn(item));
    }
    return result;
}

const result = arr.myMap((item) => item * 2);

console.log(result);