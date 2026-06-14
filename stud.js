// Student class
class Student {

    constructor(id, name, marks) {
        this.id = id;
        this.name = name;
        this.marks = marks;
    }
}

// Management class
class StudentManagement {

    constructor() {
        this.students = [];
    }

    // Add student
    addStudent(student) {
        this.students.push(student);
    }

    // Display students
    displayStudents() {
        console.log("Student List:");

        for (let student of this.students) {
            console.log(
                `ID: ${student.id}, Name: ${student.name}, Marks: ${student.marks}`
            );
        }
    }

    // Find topper
    findTopper() {

        let topper = this.students[0];

        for (let student of this.students) {

            if (student.marks > topper.marks) {
                topper = student;
            }
        }

        return topper;
    }
}

// Create object
let system = new StudentManagement();

system.addStudent(new Student(1, "Amit", 85));
system.addStudent(new Student(2, "Rahul", 92));
system.addStudent(new Student(3, "Priya", 88));

system.displayStudents();

console.log("Topper:", system.findTopper());