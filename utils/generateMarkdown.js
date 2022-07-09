// Returns a license badge based on which license is passed. If there is no license, return an empty string
function renderLicenseBadge(answers) {
  return `![License](https://img.shields.io/badge/license-${answers.license}-blue.svg)`
}

// Function to return the license link. If there is no license, return an empty string
function renderLicenseLink(answers) {
  return `[License link](https://choosealicense.com/licenses/${answers.license.toLowerCase()}/)`
}

// Returns license info to section. If there is no license, return an empty string
function renderLicenseSection(answers) {
  if(answers.license ==='none') {return ``}
  else
  {
  return `
  # License \n
  ${answers.license} \n
  ${renderLicenseBadge(answers)} \n
  Link of License: ${renderLicenseLink(answers)} \n\n\n
  `
  }
}

// Function to list license info in the Table of Contents. If there is no license, do not list a license in the TOC
function renderLicensetoc(answers)
{
  if(answers.license ==='none') {return ``}
  else {
    return `
  * [License](#license)
    `}
}

// Generates markdown for README
function generateMarkdown(answers) 
{
  return `
  # ${answers.title}

  ## Description \n
  ${answers.description} \n\n\n

  ${renderLicenseSection(answers)}

  # Table of Contents
  * [Description](#description)
  ${renderLicensetoc(answers)}
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions) \n\n\n

  # Installation \n 
  ${answers.installation} \n\n\n

  # Usage \n
  ${answers.usage} \n\n\n
  
  # Contributing \n
  ${answers.contributing} \n\n\n

  # Tests \n
  ${answers.tests} \n\n\n

  # Questions \n
  ${answers.username} \n\n\n
  For details, please visit my github at [github link](${answers.link}) \n\n
  For questions, please email me at [email](mailto:${answers.email}) \n\n
  `;
}

module.exports = generateMarkdown;



