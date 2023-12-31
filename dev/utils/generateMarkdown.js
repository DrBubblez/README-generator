// This file contains the markdown template for the README file.

// This function returns the license badge based on which license is passed in.
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
  } else if (license === "Apache 2.0") {
    return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
  } else if (license === "GPL 3.0") {
    return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
  } else if (license === "BSD 3") {
    return "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)"
  } else if (license === "None") {
    return ""
  }
}

// This function returns the license link based on which license is passed in.
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT"
  }
  else if (license === "Apache 2.0") {
    return "https://opensource.org/licenses/Apache-2.0"
  }
  else if (license === "GPL 3.0") {
    return "https://www.gnu.org/licenses/gpl-3.0"
  }
  else if (license === "BSD 3") {
    return "https://opensource.org/licenses/BSD-3-Clause"
  }
  else if (license === "None") {
    return ""
  }
}

// This function returns the license section of README based on which license is passed in.
function renderLicenseSection(license) {
  if (license === "None") {
    return ""
  }
  else {
    return `## License
    This project is licensed under the ${license} license.`
  }
}

// This function generates markdown for README.
// The template will be populated with user input from the command line.
// The template will be written to the new README.md file.
function generateMarkdown(data) {
return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
${renderLicenseSection(data.license)}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
If you have any questions, please contact me at ${data.email} or visit my GitHub page at https://github.com/${data.github}.
`
}

module.exports = generateMarkdown;
