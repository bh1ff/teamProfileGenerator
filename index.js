const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const tMembers = [];
const idList = [];

const appM = () => {
  function newManager() {
    console.log("Add a New Member");
    inquirer.createPromptModule([
      {
        type: "input",
        name: "managerName",
        message: "What is your team manager's name",
        validate: (answer) => {
          if (answer != "") {
            return true;
          } else {
            return "please enter a name";
          }
        },
      },
      {
        type: "input",
        name: "manageId",
        message: "What is your team manager's id",
        validate: (answer) => {
          if (answer != "") {
            return true;
          } else {
            return "please enter a valid id";
          }
        },
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is your team manager's email?",
        validate: (answer) => {
          if (answer != "") {
            return true;
          } else {
            return "please enter a valid email";
          }
        },
      },
      {
        type: "input",
        name: "managerOffice",
        message: "What is your team manager's office number",
        validate: (answer) => {
          if (answer != "") {
            return true;
          } else {
            return "please enter a valid office number";
          }
        },
      },
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.manageId, answers.managerEmail, answers.managerOffice)
        tMembers.push(manager);
        idList.push(answers.manageId)
    })
  }
};

appM();
