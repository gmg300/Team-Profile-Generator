const Employee = require("./Employee");

class Intern extends Employee {
    constructor (school) {
        super(name, id, title);
        this.school = school;
    }

    getSchool() {
        
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;