//  Write a JavaScript program to target a given value in a nested object based on the given key.

// e.g in the object below destructure the degree key.

//  

// Json
// const user = {

// id: 339,

// name: 'Fred',

// age: 42,

// education: {

// degree: 'Masters'
// }

// }
const user = {
  id: 339,
  name: 'Fred',
  age: 42,
  education: {
    degree: 'Masters'
  }
};

const { education: { degree } } = user;

console.log(degree);
