// 4. Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.

// Student Name	Marks
// David	80
// Vinoth	77
// Divya	88
// Ishitha	95
// Thomas	68

// The grades are computed as follows :

//  

// Range	Grade
// <60	F
// <70	D
// <80	C
// <90	B
// <100	A

let students = [
  { name: "David", marks: 80 },
  { name: "Vinoth", marks: 77 },
  { name: "Divya", marks: 88 },
  { name: "Ishitha", marks: 95 },
  { name: "Thomas", marks: 68 }
];

let totalMarks = 0;

for (var i = 0; i < students.length; i++) {
  totalMarks += students[i].marks;
}

var averageMarks = totalMarks / students.length;

console.log("Average marks: " + averageMarks.toFixed(2));

var grade;

if (averageMarks < 60) {
  grade = "F";
} else if (averageMarks < 70) {
  grade = "D";
} else if (averageMarks < 80) {
  grade = "C";
} else if (averageMarks < 90) {
  grade = "B";
} else {
  grade = "A";
}

console.log("Grade: " + grade);

 