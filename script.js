/****************
 * Hoisting
 *
 */

// Functions
calculateAge(1965);

function calculateAge(year) {
    console.log(2019 - year);
}

// retirement(1965);

var retirement = function (year) {
    console.log(65 - (2019 - year));
};

// Variables


console.log(age);
var age = 23;

function foo() {
    var age = 65;
    console.log(age);
}

foo();
console.log(age);

/***********
 *
 * Scoping
 */


