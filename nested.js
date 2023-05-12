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

function findValueByKey(obj, targetKey) {
  for (let key in obj) {
    if (key === targetKey) {
      return obj[key];
    }
    if (typeof obj[key] === 'object') {
      const nestedValue = findValueByKey(obj[key], targetKey);
      if (nestedValue !== undefined) {
        return nestedValue;
      }
    }
  }
  return undefined;
}

const targetKey = 'degree';
const targetValue = findValueByKey(user, targetKey);

console.log(targetValue);
