const inquirer = require("inquirer");
const fs = require("fs");
const validator = require("email-validator");
const chalk = require("chalk");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./templates/generateHTML");

// Add functions
function addEmployees(team) {
  // Add Employees
  if (team.length < 1) {
    addManager(team);
  } else {
    inquirer
      .prompt({
        type: "list",
        name: "action",
        message: "Add more members or finish and build your team?",
        choices: ["Add Engineer", "Add Intern", "Finish and build team"],
      })
      .then(function (res) {
        switch (res.action) {
          case "Add Engineer":
            addEngineer(team);
            break;
          case "Add Intern":
            addIntern(team);
            break;
          case "Finish and build team":
            buildTeam(team);
            break;
        }
      });
  }
}
function addManager(team) {
  console.log(chalk.cyan("--- Add a Manager ---"));
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Name:",
        validate: function (input) {
          return input !== "";
        },
      },
      {
        type: "number",
        name: "id",
        message: "ID Number:",
        // Number validation - https://github.com/sameeri/Code-Inquirer/wiki/Asking-questions-away-with-Inquirer!
        validate: function (input) {
          let valid = !isNaN(parseFloat(input));
          return valid || "Please enter a number(key up then down to clear)";
        },
      },
      {
        type: "input",
        name: "email",
        message: "Email:",
        // Email validation - https://www.npmjs.com/package/email-validator
        validate: function (input) {
          let valid = validator.validate(input);
          return valid || "Please enter a email(key up then down to clear)";
        },
      },
      {
        type: "number",
        name: "officeNumber",
        message: "Office Number:",
        // Number validation - https://github.com/sameeri/Code-Inquirer/wiki/Asking-questions-away-with-Inquirer!
        validate: function (input) {
          var valid = !isNaN(parseFloat(input));
          return valid || "Please enter a number(key up then down to clear)";
        },
      },
    ])
    .then(function (res) {
      team.push(
        new Manager(
          res.name,
          res.id,
          res.email,
          res.officeNumber
        ).renderProfile()
      );
      addEmployees(team);
    });
}
function addEngineer(team) {
  console.log(chalk.cyan("--- Add an Engineer ---"));
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Name:",
        validate: function (input) {
          return input !== "";
        },
      },
      {
        type: "number",
        name: "id",
        message: "ID Number:",
        // Number validation - https://github.com/sameeri/Code-Inquirer/wiki/Asking-questions-away-with-Inquirer!
        validate: function (input) {
          let valid = !isNaN(parseFloat(input));
          return valid || "Please enter a number(key up then down to clear)";
        },
      },
      {
        type: "input",
        name: "email",
        message: "Email:",
        // Email validation - https://www.npmjs.com/package/email-validator
        validate: function (input) {
          let valid = validator.validate(input);
          return valid || "Please enter a email(key up then down to clear)";
        },
      },
      {
        type: "input",
        name: "github",
        message: "Github Username:",
        validate: function (input) {
          return input !== "";
        },
      },
    ])
    .then(function (res) {
      team.push(
        new Engineer(res.name, res.id, res.email, res.github).renderProfile()
      );
      addEmployees(team);
    });
}
function addIntern(team) {
  console.log(chalk.cyan("--- Add an Intern ---"));
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Name:",
        validate: function (input) {
          return input !== "";
        },
      },
      {
        type: "number",
        name: "id",
        message: "ID Number:",
        // Number validation - https://github.com/sameeri/Code-Inquirer/wiki/Asking-questions-away-with-Inquirer!
        validate: function (input) {
          let valid = !isNaN(parseFloat(input));
          return valid || "Please enter a number(key up then down to clear)";
        },
      },
      {
        type: "input",
        name: "email",
        message: "Email:",
        // Email validation - https://www.npmjs.com/package/email-validator
        validate: function (input) {
          let valid = validator.validate(input);
          return valid || "Please enter a email(key up then down to clear)";
        },
      },
      {
        type: "input",
        name: "school",
        message: "School:",
        validate: function (input) {
          return input !== "";
        },
      },
    ])
    .then(function (res) {
      team.push(
        new Intern(res.name, res.id, res.email, res.school).renderProfile()
      );
      addEmployees(team);
    });
}

// Generate HTML/File
function buildTeam(team) {
  console.log(chalk.cyan("--- Team name ---"));
  inquirer.prompt({
    type: "input",
    name: "name",
    message: "What would you like to name this team? (no spaces, this will be the file name)"
  })
  .then(function(res) {
    let teamName = res.name;
    const html = generateHTML(team.join(''));
    writeToFile(teamName, html);
  }); 
}
function writeToFile(teamName, html) {
  const path = `../Output/${teamName}.html`;
  fs.writeFileSync(path, html);
  console.log(chalk.green(`${teamName}.html created`));
  init();
}

// Start App
function init() {
  let team = [];
  console.log(chalk.cyan("--------------------------"));
  console.log(chalk.cyan("| Team Profile Generator |"));
  console.log(chalk.cyan("--------------------------"));
  inquirer
    .prompt({
      type: "confirm",
      name: "createTeam",
      message: "Generate a new team?",
    })
    .then(function (res) {
      if(res.createTeam === false) {
        process.exit();
      } else {
        addEmployees(team);
      }
    });
}
init();
