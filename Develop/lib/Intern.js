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
        return `<div class="col-lg-4 col-md-12 mb-lg-0 mb-4">
                    <div class="card-wrapper mb-3 hvr-grow">
                        <div class="card custom-shadow">
                            <!-- Photo credit - https://burst.shopify.com/photos/student-holding-out-diploma-by-wall?q=graduate -->
                            <img class="card-img-top" src="../Develop/templates/images/${this.title}-color.jpg" alt="${this.title} card image">
                            <div class="over-img text-center">
                                <h2 class="font-weight-bold">${this.name}</h2>
                                <h3 class="font-weight-bold"><i class="fas fa-user-graduate"></i> ${this.title}</h3>
                            </div>
                            <div class="card-body mt-5 pt-4">
                                <hr>
                                <p><strong>ID:</strong> ${this.id}</p>
                                <p><strong>Email:</strong> ${this.email}</p>
                                <p><strong>School:</strong> ${this.school}</p>
                                <hr>
                            </div>
                        </div>
                    </div>
                </div>`;
    }
}

module.exports = Intern;