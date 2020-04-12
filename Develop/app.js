const inquirer = require("inquirer");
const fs = require("fs");
const chalk = require("chalk");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./templates/generateHTML");

function writeToFile(fileName, data) {
  const path = "./output/" + fileName;
  fs.writeFileSync(path, data);
  console.log(chalk.green("Created file 'README.md'"));
}
class Team {
  constructor() {
    this.manager = {};
    this.engineers = [];
    this.interns = [];
  }

  async addEmployees() {
    // Prompt User to input employee info and push to object or arrays
    try {
      // Get employee data
      let employee = await inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "Name:",
          validate: function validateTitle(input) {
            return input !== "";
          },
        },
        {
          type: "input",
          name: "id",
          message: "ID Number:",
          validate: function validateTitle(input) {
            return input !== "";
          },
        },
        {
          type: "input",
          name: "email",
          message: "Email:",
          validate: function validateTitle(input) {
            return input !== "";
          },
        },
        {
          type: "list",
          name: "title",
          message: "Role:",
          choices: ["Manager", "Engineer", "Intern"],
          validate: function validateTitle(input) {
            return input !== "";
          },
        },
        {
          type: "input",
          name: "officeNumber",
          message: "Office Number:",
          validate: function validateTitle(input) {
            return input !== "";
          },
          when: function (input) {
            if (input.title === "Manager") {
              return true;
            }
            return false;
          },
        },
        {
          type: "input",
          name: "github",
          message: "Github Username:",
          validate: function validateTitle(input) {
            return input !== "";
          },
          when: function (input) {
            if (input.title === "Engineer") {
              return true;
            }
            return false;
          },
        },
        {
          type: "input",
          name: "school",
          message: "School:",
          validate: function validateTitle(input) {
            return input !== "";
          },
          when: function (input) {
            if (input.title === "Intern") {
              return true;
            }
            return false;
          },
        },
      ]);
      // Push data to appropriate const
      switch (employee.title) {
        case "Manager":
          this.manager = new Manager(
            employee.name,
            employee.id,
            employee.email,
            employee.officeNumber
          ).renderProfile();
          break;
        case "Engineer":
          this.engineers.push(
            new Engineer(
              employee.name,
              employee.id,
              employee.email,
              employee.github
            ).renderProfile()
          );
          break;
        case "Intern":
          this.interns.push(
            new Intern(
              employee.name,
              employee.id,
              employee.email,
              employee.school
            ).renderProfile()
          );
          break;
      }
      // Loop if user wants to add more employees
      let ask = await inquirer.prompt({
        type: "confirm",
        name: "again",
        message: "Add more employees?",
      });
      if(ask.again) {
        this.addEmployees();
      } else {
        const data = generateHTML(this.manager, this.engineers.join(''), this.interns.join(''));
        writeToFile("team.html", data);
        return;
      }
    } catch (err) {
      console.error("Whoops!");
    }
  }

  async generateEmployeeCards() {
    // Create class for each employee and generate profile card
  }
}

async function init() {
  const team = new Team();
  team.addEmployees();
  //  console.log(team);
}

init();
