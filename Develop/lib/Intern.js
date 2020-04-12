const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.title = "Intern";
    }

    getSchool() {
        return this.school;
    }

    renderProfile() {
        return `<div class="card my-3 rounded text-light" style="min-width: 18rem; max-width: 18rem;">
                    <div class="card-header bg-primary">
                        <h4>${this.name}</h4>
                        <h5><i class="fas fa-user-graduate"></i> ${this.title}</h5>
                    </div>
                    <div class="card-body text-dark bg-light">
                         <ul class="list-group">
                            <li class="list-group-item">ID: ${this.id}</li>
                            <li class="list-group-item">Email: ${this.email}</li>
                            <li class="list-group-item">School: ${this.school}</li>
                        </ul>
                    </div>
                </div>`;
    }
}

module.exports = Intern;