let now = new Date();
console.log(now);

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

console.log(now.getDate());
console.log(isNaN(now.getMonth()));
console.log(now.getFullYear());

let month = now.getMonth();

console.log(months[month]);

