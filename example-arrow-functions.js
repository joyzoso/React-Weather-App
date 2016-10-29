var names = ['dog', 'cat', 'bob'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });

// name.forEach((name) => console.log(name));


// var returnMe = (name) => name + '!';
// console.log(returnMe('Joy'));

// var person = {
//   name: 'Joy',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet();



//challenge
function add (a, b) {
  return a + b;
}
//addstatement
var addStatement = (a, b) => {
  return a + b;
}
console.log(addStatement(4,7));

//addExpression

var addExpression = (a,b) => a + b;
console.log(addExpression(3, -2));
