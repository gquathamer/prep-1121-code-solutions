function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log('minutes', minutes);

function getGreeting(name) {
  return 'Hello ' + name;
}

var greeting = getGreeting('Garrett');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return 5 * (num1 + num2);
}

var addAndMultiplyResult = addAndMultiplyBy5(10, 5);
console.log('number', addAndMultiplyResult);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractByTwoResult = subtractTwoNumbers(22, 7);
console.log('number', subtractByTwoResult);

function getCircleCircumference(radius) {
  return 2 * (Math.PI * radius);
}

var circumference = getCircleCircumference(5);
console.log('circumference', circumference);

function getFullName(firstname, lastname) {
  return firstname + ' ' + lastname;
}

var fullName = getFullName('Garrett', 'Quathamer');
console.log('full name', fullName);

function cube(number) {
  return number * number * number;
}

var cubeResult = cube(5);
console.log('cube', cubeResult);
