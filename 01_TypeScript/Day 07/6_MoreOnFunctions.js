//Optional Arguments
function Hello(fname, lname) {
    lname = lname || "";
    console.log("Hello, " + fname + " " + lname);
}
// Hello("Manish", "Sharma");
// Hello("Abhijeet");
// Default Arguments
function Multiply(x, y) {
    if (y === void 0) { y = 1; }
    return x + y;
}
console.log(Multiply(2, 3));
console.log(Multiply(2));
var area = function (rect) {
    rect.w = rect.w || rect.h;
    return rect.h * rect.w;
};
var s1 = { h: 10, w: 20 };
console.log(area(s1));
var s2 = { h: 10 };
console.log(area(s2));
