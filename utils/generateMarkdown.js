// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}
## Instalation Guide
${data.instalationGuide}
## Usase
${data.usage}
## License
${data.license}
## Contributing
${data.contributions}
## Questions
${data.questions}
## GitHub Username
${data.gitusername}
## Email
${data.email}
`;
}

module.exports = generateMarkdown;
