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


Function.prototype.myBind = function (name, ...args1) {

    const pointer = this;
    return function (...args2) {
        pointer.apply(name, [...args1, ...args2]);
    }
}

const printAkashFullName = printFullName.myBind(akash, 'Indore');
const printAnushikaFullName = printFullName.myBind(anushika, 'Perth', 'Aurtralia');

printAkashFullName('India');
printAnushikaFullName();

