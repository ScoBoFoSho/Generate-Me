// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (license !== "None") {
//     return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
//   }
//   return "";
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `
    This project is listed under the ${license} license and 
    protected under it's stautes and commands.

    `;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)} 



## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Usage](#usage)
- [Questions?](#questions)


## Description
${data.description}


## Installation
${data.installation}


## License
${renderLicenseSection(data.license)}


## Contributors
${data.contributors}

## Tests
${data.test}


## Usage
${data.usage}


## Questions

Contact Me:
Github: [${data.username}](https://github.com/${data.username}) 
Email : [${data.email}](${data.email})
`
;
}

module.exports = generateMarkdown;
