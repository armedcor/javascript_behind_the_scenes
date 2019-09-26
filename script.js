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

// First Scoping Example

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}


// Example to show the difference between execution stack and scope chain

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third();
    }
}

function third() {
    var d = 'John';
    console.log(c);
}