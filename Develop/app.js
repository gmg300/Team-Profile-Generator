const inquirer = require("inquirer");
const fs = require("fs");
const validator = require("email-validator");
const chalk = require("chalk");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./templates/generateHTML");

// QUESTIONS
const questions = [
  {
    type: "input",
    name: "name",
    message: "Name:",
    validate: function(input) {
      return input !== "";
    },
  },
  {
    type: "number",
    name: "id",
    message: "ID Number:",
    // Number validation - https://github.com/sameeri/Code-Inquirer/wiki/Asking-questions-away-with-Inquirer!
    validate: function(input) {
      let valid = !isNaN(parseFloat(input));
      return valid || "Please enter a number(key up then down to clear)";
    },
  },
  {
    type: "input",
    name: "email",
    message: "Email:",
    validate: function (input) {
      let valid = validator.validate(input);
      return valid || "Please enter a email(key up then down to clear)";
    },
  },
  {
    type: "list",
    name: "title",
    message: "Role:",
    choices: ["Manager", "Engineer", "Intern"],
    validate: function (input) {
      return input !== "";
    },
  },
  {
    type: "number",
    name: "officeNumber",
    message: "Office Number:",
    validate: function(input) {
      var valid = !isNaN(parseFloat(input));
      return valid || "Please enter a number(key up then down to clear)";
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
    validate: function (input) {
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
    validate: function (input) {
      return input !== "";
    },
    when: function (input) {
      if (input.title === "Intern") {
        return true;
      }
      return false;
    },
  },
];

// VALIDATION

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
      let employee = await inquirer.prompt(questions);
      // Construct employee with data and push to Team
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
      if (ask.again) {
        this.addEmployees();
      } else {
        // Generate HTML with data and write to .html file
        const data = generateHTML(
          this.manager,
          this.engineers.join(""),
          this.interns.join("")
        );
        this.writeToFile("team.html", data);
        return;
      }
    } catch (err) {
      console.error(err);
    }
  }
  // WRITE HTML FILE TO SYSTEM
  writeToFile(fileName, data) {
    const path = "./output/" + fileName;
    fs.writeFileSync(path, data);
    console.log(chalk.green("Created file 'README.md'"));
  }
}

function init() {
  console.log(chalk.blue("Enter your team info below:"));
  const team = new Team();
  team.addEmployees();
  //  console.log(team);
}

init();
