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

    
    function addEngineer() {
        console.log('Adding an Engineer');
    }
  function createTeam() {
    inquirer.prompt({
        type:"list",
        name:"newTeamType",
        prompt:"Which employee type are you adding?",
        choices: [
            "Engineer",
            "Intern",
            "I don't want to add any more team members"
        ]
    }).then(userChoice => {
        if(userChoice.newTeamType == "Engineer") {
            // add engineer  time stamp 25.46
        }
        else if(userChoice.newTeamType == "Intern") {
            // add intern 
        }
        else {
            // finalise team function 
        }

    })
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
        tMembers.push(manager);
        idList.push(answers.manageId);
        createTeam();
      });
  }
  newManager();
};

appM();
