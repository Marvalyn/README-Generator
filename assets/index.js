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
            message: "Please complete a Table of Contents.",
            name: "table of contents"
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
            name: "contributing"
        }, {
            type: "input",
            message: "What commands are needed to test this app?",
            name: "tests"
        }, {
            type: "input",
            message: "Please enter your contact info for inquiries.",
            name: "questions"
        },
    ])
    .then((data) => {
        const filename = `${data.title.toLowerCase().split(' ').join('')}.md`;
    
        fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
          err ? console.log(err) : console.log('Success!')
        );
      });
    
// function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, function(err) {
//         console.log(fileName)
//         console.log(data)
//         if (err) {
//             return console.log(err)
//         } else {
//             console.log("success")
//         }
//     })
// }

// function to initialize program
// function init() {
//     inquirer.prompt(questions)
//     // .then(function(data) {
//     //     // writeToFile("README.md", generatorMarkdown(data));
//     //     // console.log(data)

//     // })
// }

// // function call to initialize program
// init();
