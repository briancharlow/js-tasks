// 3. What is the output of the below code:

//  

// JavaScript
let name = "Mary";

function greetPeople(){

  let name = "Clause";

  console.log(`Hello ${name}`)

}

greetPeople()

// output: Hello Clause
// this is because the cope used is the function scope hence the closest initialization of name is used.