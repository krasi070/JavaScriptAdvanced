export class Employee {
    constructor(name, age) {
        if (new.target === Employee) {
            throw new Error('Employee is an abstract class!');
        }

        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }

    work() {
        let currTask = this.tasks.shift();
        console.log(this.name + ' ' + currTask);
        this.tasks.push(currTask);
    }

    collectSalary() {
        console.log(`${this.name} received ${this.salary} this month.`);
    }
}