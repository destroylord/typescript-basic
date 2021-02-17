// varialbe
var nama = "Dafrin";
var umur = [12, 14, 20];
function celGolDar(gd) {
}
celGolDar("A");
// Function biasas
function getNama() {
    return nama;
}
function getNoReturn() {
    console.log("function void");
}
// anonymous function 
var f = function () {
    return nama;
};
var fvoid = function () {
    console.log("ini function anonymous void");
};
// arrow function
var arrowFunction = function (param) {
    return param;
};
function getData(param1) {
    if (param1 === void 0) { param1 = "default value param"; }
    console.log(param1);
}
console.log(getNama);
getNoReturn();
getData("ini bukan default param");
// pemanggilan anonoymous function
console.log(f());
fvoid();
