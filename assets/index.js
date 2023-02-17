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
            name: "title",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a project title');
                    return false;
                }
            }
        }, {
            type: "input",
            message: "Please give a detailed description of your project.",
            name: "description",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please provide a project description');
                    return false;
                }
            }
        }, {
            type: "input",
            message: "What dependencies (if any) does the user need to install to run this app?",
            name: "installation",
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please provide installation steps');
                    return false;
                }
            }
        }, {
            type: "input",
            message: "Please give instructions on how to use this App.",
            name: "usage",
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please provide a use for your project');
                    return false;
                }
            }
        }, {
            type: "list",
            message: "What liscence is being used?",
            name: "license",
            choices: ["Apache 2.0", "MIT", "Eclipse Public 1.0", "Boost Software 1.0", "General Public License"],
            validate: licenseInput = () => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please select an option')
                    return false;
                    }
            }
        }, {
            type: "input",
            message: "Please name any other users that contributed to this project",
            name: "contributors",
            validate: contributionsInput => {
                if (contributionsInput) {
                    return true;
                } else {
                    console.log('Please list any contributors, or enter contribution guidelines');
                    return false;
                }
            }
        }, {
            type: "input",
            message: "What commands are needed to test this app?",
            name: "tests",
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter commands to test this project');
                    return false;
                }
            }
        }, {
            type: "input",
            message: "What is your GitHub username?",
            name: "username",
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Please enter a username');
                    return false;
                }
            }
        },{
            type: "input",
            message: "What is your email address?",
            name: "email",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email address');
                    return false;
                }
            }
        },
        
    ])
    //functiion to capture inputted data and create an md file 
    .then((data) => {
        fs.writeFile("SampleREADME.md", generateMarkdown(data), (err) => {
          err ? console.log(err) : console.log('Success!')
        })
    });