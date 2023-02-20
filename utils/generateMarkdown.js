// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of contents
  1. [Description](#description)
  2. [Instalation Guide](#instalation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributions](#contributing)
  6. [GitHub Username](#gitHub)
  7. [Questions](#questions)
  8. [Email](#email)

## Description
${data.description}
## Instalation Guide
${data.instalationGuide}
## Usage
${data.usage}
## License
${data.license}
## Contributing
${data.contributions}
## Questions
${data.questions}
## GitHub Username
[https://github.com/${data.gitusername}](${data.gitusername})
## Email
[${data.email}]
`;
}

module.exports = generateMarkdown;
