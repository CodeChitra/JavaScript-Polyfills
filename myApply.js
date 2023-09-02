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


Function.prototype.myApply = function (scope, args) {
    scope._this = this;

    scope._this(...args);
}
printFullName.myApply(akash, ['Indore', 'India']);