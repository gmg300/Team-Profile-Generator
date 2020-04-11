const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

class Team {
  constructor() {
    this.manager = {};
    this.engineers = [];
    this.interns = [];
  }

  async addEmployees() {
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
          this.manager = employee;
          break;
        case "Engineer":
          this.engineers.push(employee);
          break;
        case "Intern":
          this.interns.push(employee);
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
        console.log(this);
        return;
      }
    } catch(err) {
        console.error("Whoops!");
    }
  }
}

function init() {
  const team = new Team();
  team.addEmployees();
}

init();
