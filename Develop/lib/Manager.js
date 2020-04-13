const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.title = "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    renderProfile() {
        return `<div class="card my-3 rounded text-light" style="min-width: 18rem; max-width: 18rem;">
                    <div class="card-header bg-primary">
                        <h4>${this.name}</h4>
                        <h5><i class="fas fa-tasks"></i> ${this.title}</h5>
                    </div>
                    <div class="card-body text-dark bg-light">
                         <ul class="list-group">
                            <li class="list-group-item"><strong>ID:</strong> ${this.id}</li>
                            <li class="list-group-item"><strong>Email:</strong> ${this.email}</li>
                            <li class="list-group-item"><strong>Office #:</strong> ${this.officeNumber}</li>
                        </ul>
                    </div>
                </div>`;
    }
}

module.exports = Manager;