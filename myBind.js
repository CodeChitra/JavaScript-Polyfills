//! METHOD 1: USING CALL OR APPLY METHOD

Function.prototype.myBind1 = function (context, ...args1) {

    const fn = this;
    return function (...args2) {
        fn.apply(context, [...args1, ...args2]);
    }
}

//! METHOD 2: WITHOUT USING CALL OR APPLY METHOD
Function.prototype.myBind2 = function (context, ...args1) {

    context._this = this;

    return function (...args2) {
        return context._this(...args1, ...args2);
    }
}


const akash = {
    firstName: "Akash",
    lastName: "Chitransh"
}

const anushika = {
    firstName: "Anushika",
    lastName: "Gupta"
}

function printFullName(city, country) {
    console.log(this.firstName + ' ' + this.lastName + ', lives in ' + city + ' ' + country);
}




const printAkashFullName = printFullName.myBind1(akash, 'Indore');
const printAnushikaFullName = printFullName.myBind2(anushika, 'Perth', 'Aurtralia');

printAkashFullName('India');
printAnushikaFullName();

