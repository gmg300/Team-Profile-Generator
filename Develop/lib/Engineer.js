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
        return `<div class="col-lg-4 col-md-12 mb-lg-0 mb-4">
                    <div class="card-wrapper mb-3 hvr-grow">
                        <div class="card custom-shadow">
                            <!-- Photo credit - https://burst.shopify.com/photos/developer-coding-in-php?q=php -->
                            <img class="card-img-top" src="../Develop/templates/images/Engineer-color.jpg" alt="Engineer card image">
                            <div class="over-img text-center">
                                <h2 class="font-weight-bold">${this.name}</h2>
                                <h3 class="font-weight-bold"><i class="fas fa-code"></i> ${this.title}</h3>
                            </div>
                            <div class="card-body mt-5 pt-4">
                                <hr>
                                <p><strong>ID:</strong> ${this.id}</p>
                                <p><strong>Email:</strong> ${this.email}</p>
                                <p><strong>Github:</strong> ${this.github}</p>
                                <hr>
                            </div>
                        </div>
                    </div>
                </div>`;
    }
}

module.exports = Engineer;