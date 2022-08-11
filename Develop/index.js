const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");
const generateREADME = require(".");
const path = require("path");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the project about? Please give details!",
  },
  {
    type: "confirm",
    name: "table",
    message: "Confirm Table of Contents",
    default: "true",
    validate: (confirmTrue) => {
      if (confirmTrue) {
        return true;
      } else {
        console.log("You must have a Table of Contents");
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message:
      "What installations/dependencies are required to install and run this app?",
  },
  {
    type: "list",
    name: "license",
    messaage: "What license does your project use?",
    choices: ["MIT", "Apache_2.0", "GPL_3.0", "None"],
  },
  {
    type: "input",
    name: "contributors",
    message: "Who contributed to this project?",
  },
  {
    type: "input",
    name: "tests",
    message: "What tests did you use for this project?",
  },
  {
    type: "input",
    name: "usage",
    message: "What command runs this application?",
  },
  {
    type: "confirm",
    name: "questions",
    message: "Do you have questions regarding this project?",
    default: "true",
    validate: (confirmTrue) => {
      if (confirmTrue) {
        return true;
      } else {
        console.log("Certainly people will have questions, yes?");
      }
    },
  },
  {
    type: "input",
    name: "username",
    message: "What is your GitHub Username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your GitHub-related email?",
  },
];

// TODO: Create a function to write README file
const writeFile = (fileName, data) => {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeFile("./dist/README.md", generateMarkdown({ ...data }));
  });
}

// Function call to initialize app
init();
