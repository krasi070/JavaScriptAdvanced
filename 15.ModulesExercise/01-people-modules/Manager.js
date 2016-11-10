import { Employee } from './Employee';

export class Manager extends Employee {
    constructor(name, age) {
        super(name, age);
        this.tasks.push('scheduled a meeting.');
        this.tasks.push('is preparing a quarterly report.');
        this.dividend = 0;
    }

    collectSalary() {
        console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
    }
}