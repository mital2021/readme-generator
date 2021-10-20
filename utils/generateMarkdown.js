
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license == 'Apache') {
    return '![license](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'Apache') {
    return '(https://opensource.org/licenses/Apache-2.0)';
  } else {
    return '';
  }
}

  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  
  function renderLicenseSection() {
   
    generateMarkdown += `
    * [License](#license)`;

  }

  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing

${data.contributing}

## Tests

${data.test}

## License
${data.license}

## Questions

If you have any questions, feel free to email me:
${data.email}

Feel free to check out my Github Repository (https://github.com/${data.github})


`;
  }

 module.exports = { generateMarkdown };
