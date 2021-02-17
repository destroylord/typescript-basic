var isDone = false;
// number
var deciman = 6;
var big = 100n;
// string
var fullName = "Dafrin Maulana";
var sentence = "Hello my name is " + fullName;
// array
var list = [1, 2, 3];
var listNumber = [4, 5, 6];
// tuple
var x;
x = ["Dafrin", 10];
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var colorName = Color[2];
console.log(colorName); //output Green
// unknow
var notSure = 4;
notSure = "maybe a string instead";
// OK, definitely a boolean
notSure = false;
// any
var looselyTyped = {};
// let d  = looselyTyped.a.b.c.d;
// void
function warnUser() {
    console.log("this is my warning message");
}
warnUser();
// null and undifined
var u = undefined;
var n = null;
// never
function error(message) {
    throw new Error(message);
}
// object
function create(o) {
    create({
        prop: 0
    }),
        create(null),
        create(undefined);
}
