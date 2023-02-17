const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of the project?",
            name: "title"
        }, {
            type: "input",
            message: "Please give a detailed description of your project.",
            name: "description"
        }, {
            type: "input",
            message: "What dependencies (if any) does the user need to install to run this app?",
            name: "installation"
        }, {
            type: "input",
            message: "Please give instructions on how to use this App.",
            name: "usage"
        }, {
            type: "list",
            message: "What liscence is being used?",
            name: "license",
            choices: ["Apache 2.0", "MIT", "Eclipse Public 2.0", "Boost Software 1.0", "General Public License"]
        }, {
            type: "input",
            message: "Please name any other users that contributed to this project",
            name: "contributors"
        }, {
            type: "input",
            message: "What commands are needed to test this app?",
            name: "tests"
        }, {
            type: "input",
            message: "What is your GitHub username?",
            name: "username"
        },{
            type: "input",
            message: "What is your email address?",
            name: "email"
        },
        
    ])
    //functiion to capture inputted data and create an md file 
    .then((data) => {
        fs.writeFile("README.md", generateMarkdown(data), (err) => {
          err ? console.log(err) : console.log('Success!')
        })
    });