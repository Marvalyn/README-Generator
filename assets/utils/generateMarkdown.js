// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

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
  This project is licensed under the ${data.license} license. More information on this license can be found here: ${renderLicenseLink(data.license)}

  # Contributing
  Contributors: ${data.contributors}

  # Tests
  The following command is needed to run the test: ${data.tests}

  # Questions
  If you have any questions please visit ${data.username} or send an email to: ${data.email}.
`;
}

module.exports = generateMarkdown;

//function to generate license badges
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'MIT') {
      badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (license === 'Apache 2.0') {
      badge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  } else if (license === "General Public License") {
      badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else if (license === "Boost Software 1.0") {
    badge = "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)"
  } else if (license === "Eclipse Public 1.0") {
    badge = "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)"
  } else {
    badge = ""
  }
  return badge;
}

function renderLicenseLink(license) {
  let licenseLink = '';
    if(license === 'MIT') {
      licenseLink = 'https://choosealicense.com/licenses/mit/'
    } else if (license === 'Apache 2.0') {
      licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0'
    } else if (license === "General Public License") {
      licenseLink = 'https://www.gnu.org/licenses'
    } else if (license === "Boost Software 1.0") {
      licenseLink = "https://www.boost.org/LICENSE_1_0.txt"
    } else if (license === "Eclipse Public 1.0") {
     licenseLink = "https://www.eclipse.org/legal/epl-v10.html"
    } else {
      licenseLink = ""
    }
    return licenseLink;
}