//Pythagoras theorem calculator

let side_a = Number(prompt("Enter side A: "));
let side_b = Number(prompt("Enter side B: "));

let side_c = Math.round((side_a**2 + side_b**2)**0.5); //a^2 + b^2 = c^2

console.log(`The length of side c is: ${side_c}`);