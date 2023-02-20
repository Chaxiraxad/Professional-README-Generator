// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of contents
1. [Description](#description)
2. [Instalation Guide](#instalation-guide)
3. [Usage](#usage)
4. [License](#license)
5. [Contributions](#contributing)
6. [Test](#test)
7. [Questions](#questions)


## Instalation Guide
${data.instalationGuide}
## Usage
${data.usage}
## License
${data.license}
## Contributing
${data.contributions}
## Test
${data.test}
## Questions
Please contact me by email if you have any questions:
[${data.email}](email)

Check my GitHub profile to see my work:
[https://github.com/${data.gitusername}](${data.gitusername})


`;
}

module.exports = generateMarkdown;
