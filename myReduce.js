const arr = [1, 2, 3, 4, 5];


Array.prototype.myReduce = function (fn, initialValue) {
    let acc;
    let curr;
    let counter = 0;
    if (this.length === 0) {
        if (initialValue === undefined) {

            console.log("TypeError: Reduce Of Empty Array With No Initial Value");
            return;
        }
        else {
            return initialValue;
        }
    }

    else if (this.length === 1) {
        if (initialValue === undefined) {
            return this[0];
        }
    }

    else {
        if (initialValue !== undefined) {
            acc = initialValue;
            counter = 0;
        }
        else {
            acc = this[0];
            counter = 1;
        }
    }

    for (counter; counter < this.length; counter++) {

        curr = arr[counter];
        acc = fn(acc, curr, counter, this);
    }

    return acc;
}


const test = [1, 2, 3, 4, 5];

console.log("=================================Inbuilt Reduce==================================");
const result = test.reduce(function (acc, curr) {
    console.log("ACC-------> ", acc);
    console.log("CURR------>", curr);

    return acc + curr;
}, 0)

console.log("--------------------------------------ANS-----------------------------------------")
console.log(result);


console.log("=================================My Reduce==================================");
const result2 = test.myReduce(function (acc, curr, index, arr) {
    console.log("ACC-------> ", acc);
    console.log("CURR------>", curr);
    console.log("Index----->", index);
    console.log("Array----->", arr);
    return acc + curr;
}, 0)

console.log("--------------------------------------ANS-----------------------------------------")
console.log(result2);