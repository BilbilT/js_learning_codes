function startMyDay() {
  return "Time for coffee and a shower!";
}
console.log(startMyDay());

function endMyDay() {
  return "It is time for a night break. Good Night!";
}
console.log(endMyDay());

function getLunchSpecial() {
  return "I had a very delicious lunch at Piligrim Pizza Cafe.";
}
console.log(getLunchSpecial());

let favoriteCookie = function (cookie) {
  return `My favorite cookie is ${cookie}.`;
};
console.log(favoriteCookie("chocloate chip"));

function calculateArea(width, height) {
  return width * height;
}
console.log(calculateArea(5, 10));

function covertToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}
console.log(covertToFahrenheit(25));

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(4));
console.log(isEven(7));

function isMultipleOfThree(number) {
  if (number / 3) {
    return true;
  } else {
    return false;
  }
}
console.log(isMultipleOfThree(9));
console.log(isMultipleOfThree(10));

function introduce(name, occupation) {
  return `Hello, my name is ${name}, and I'm from ${occupation}`;
}
console.log(introduce("Bilbil", "Ashgabat."));
console.log(introduce("Elena", "Nottingham."));

function hydrationFeedback() {
  let numGlasses = Number(
    prompt("How many glasses of water did you have today?")
  );
  if (numGlasses >= 8) {
    console.log("Congratulations!!!");
  } else {
    console.log("Not bad, not bad. Let's try for a bit more tomorrow!");
  }
}
hydrationFeedback();
