export class Branch {
    constructor(id, branchName, companyName) {
        this._id = id;
        this._branchName = branchName;
        this._companyName = companyName;
        this._employees = [];
    }

    get employees() {
        return this._employees;
    }

    hire(employee) {
        this._employees.push(employee);
    }

    toString() {
        let str = `@ ${this._companyName}, ${this._branchName}, ${this._id}\nEmployed:\n`;
        if (!(this.employees) && this.employees.length == 0) {
            str += 'None...';
        } else {
            for (let employee of this.employees) {
                str += `** ${employee.toString()}\n`;
            }
        }

        return str.trim();
    }
}