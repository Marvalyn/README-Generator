const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "Title"
}, {
    type: "input",
    message: "Please give a detailed description of your project.",
    name: "Description"
}, {
    type: "input",
    message: "Please complete a Table of Contents.",
    name: "Table of Contents"
}, {
    type: "input",
    message: "What dependencies (if any) does the user need to install to run this app?",
    name: "Installation"
}, {
    type: "input",
    message: "Please give instructions on how to use this App.",
    name: "Usage"
}, {
    type: "list",
    message: "What liscence is being used?",
    name: "License",
    choices: ["Apache 2.0", "MIT", "Eclipse Public 2.0", "Boost Software 1.0", "General Public License"]
}, {
    type: "input",
    message: "Please name any other users that contributed to this project",
    name: "Contributing"
}, {
    type: "input",
    message: "What commands are needed to test this app?",
    name: "Tests"
}, {
    type: "input",
    message: "Please enter your contact info for inquiries.",
    name: "Questions"
}, 

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
