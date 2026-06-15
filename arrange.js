// Array of student objects
let students = [
    { name: "Rahul", marks: 75 },
    { name: "Amit", marks: 90 },
    { name: "Priya", marks: 85 }
];

// Sort students by marks in descending order
students.sort((a, b) => {

    // Compare marks
    return b.marks - a.marks;
});

console.log(students);