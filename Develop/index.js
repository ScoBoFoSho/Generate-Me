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
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "None"],
  },
  {
    type: "input",
    name: "contributors",
    message: "Who contributed to this project?",
  },
  {
    type: "input",
    name: "test",
    message: "What tests did you use for this project?",
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
