const arr = [1, 2, 3, 4, 5];


Array.prototype.myFilter = function (fn) {

    if (!Array.isArray(this)) {
        console.warn(`TypeError: ${this}.myFilter is not a function`);
        return;
    }
    const result = [];

    for (item of this) {
        fn(item) && result.push(item);
    }
    return result
}

const result1 = arr.myFilter((item) => item == 0);


console.log(result1);