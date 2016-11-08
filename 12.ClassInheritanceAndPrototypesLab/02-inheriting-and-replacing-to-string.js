function inheritingAndReplacingToString() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            let superStr = super.toString().substr(0, super.toString().length - 1);
            return superStr + `, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            let superStr = super.toString().substr(0, super.toString().length - 1);
            return superStr + `, course: ${this.course})`;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

let classes = inheritingAndReplacingToString();
let p = new classes.Person('name', 'audhia');
console.log(p.toString());
let t = new classes.Teacher('teacher', 'sad', 'geo');
console.log(t.toString());
let s = new classes.Student('student', 'audsdfwhia','math');
console.log(s.toString());