// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

  # Description
  ${data.description}

  # Table of Contents 

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributors](#contributors)

  * [Tests](#tests)

  * [Questions](#questions)

  # Installation
  The following necessary dependencies must be installed to run the application properly: ${data.installation}

  # Usage
  In order to use this app run the command: ${data.usage}

  # License
  This project is licensed under the ${data.license} license. 

  # Contributors
  Contributors: ${data.contributors}

  # Tests
  The following command is needed to run the test: ${data.tests}

  # Questions
  If you have any questions please visit ${data.username} or send an email to: ${data.email}.
`;
}

module.exports = generateMarkdown;
