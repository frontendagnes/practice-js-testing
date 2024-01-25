export default function randomNumber(min, max) {
   if (min <= max) {
     return Math.floor(Math.random() * (max - min + 1) + min);
   } else throw new RangeError();
}

// function randomNumber(min, max) {
//   if (min < max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   } else throw new RangeError();
// }

console.log(randomNumber(1, 4));
