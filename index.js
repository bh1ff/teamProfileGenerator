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
  function buildTeam() {}

  function addIntern() {}

  function addEngineer() {
    inquirer.prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is your engineer's name?"
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is your engineer's id?"
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is your engineer's Email?"
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is your engineer's github?"
      },
    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      tMembers.push(engineer);
      idList.push(answers.engineerId);
      console.log(engineer);
      createTeam();
    })
  }
  function createTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "newTeamType",
          prompt: "Which employee type are you adding?",
          choices: [
            "Engineer",
            "Intern",
            "I don't want to add any more team members",
          ],
        },
      ])
      .then((userChoice) => {
        if (userChoice.newTeamType == "Engineer") {
          addEngineer();
        } else if (userChoice.newTeamType == "Intern") {
          addIntern();
        } else {
          buildTeam();
        }
      });
  }
  function newManager() {
    console.log("Add a New Member");
    inquirer
      .prompt([
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
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.manageId,
          answers.managerEmail,
          answers.managerOffice
        );
        console.log(manager);
        tMembers.push(manager);
        idList.push(answers.manageId);
        createTeam();
      });
  }
  newManager();
};

appM();
