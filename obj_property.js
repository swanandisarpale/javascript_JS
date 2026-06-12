// Student data
let students = [
    { name: "Amit", department: "IT" },
    { name: "Rahul", department: "CS" },
    { name: "Priya", department: "IT" },
    { name: "Neha", department: "CS" }
];

// Function to group students
function groupByDepartment(data) {

    let result = {};

    for (let student of data) {

        let dept = student.department;

        // Create array if department doesn't exist
        if (!result[dept]) {
            result[dept] = [];
        }

        // Add student name
        result[dept].push(student.name);
    }

    return result;
}

console.log(groupByDepartment(students));