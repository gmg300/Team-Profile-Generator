const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.title = "Engineer";
    }

    getGithub() {
        return this.github;
    }

    renderProfile() {
        return `<div class="card my-3 rounded text-light" style="min-width: 18rem; max-width: 18rem;">
                    <div class="card-header bg-primary">
                        <h4>${this.name}</h4>
                        <h5><i class="fas fa-code"></i> ${this.title}</h5>
                    </div>
                    <div class="card-body text-dark bg-light">
                         <ul class="list-group">
                            <li class="list-group-item"><strong>ID:</strong> ${this.id}</li>
                            <li class="list-group-item"><strong>Email:</strong> ${this.email}</li>
                            <li class="list-group-item"><strong>Github:</strong> ${this.github}</li>
                        </ul>
                    </div>
                </div>`;
    }
}

module.exports = Engineer;