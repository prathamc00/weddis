function calculateArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}
var radius = 5;
var area = calculateArea(radius);
console.log("This area of the circle is: " + area);