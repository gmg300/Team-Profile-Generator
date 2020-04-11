const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

async function addEmployees(team) {
    // Get employee data
    let data = await inquirer.prompt([
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
    // Push data to team array
    team.push(data);
    // Loop if user wants to add more employees
    let ask = await inquirer.prompt({
        type: "confirm",
        name: "again",
        message: "Add more employees?"
    });
    if(ask.again) {
        addEmployees(team);
    } else {
        console.log(team);
        return team;
    }




  }

function init() {
  const team = [];
  addEmployees(team);
 
}

init();
