const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    //title
    {
        type: 'input',
        name: 'name',
        message: 'What is your project title?'
    },

    // Description
    {
        type: 'input',
        name: 'description',
        message: 'Please write your project description.'
    },
    // Table of Contents

    // Installation guide
    {
        type: 'input',
        name: 'instalationGuide',
        message: 'Please add the instalation guide'
    },
    // Usage
    {
        type: 'input',
        name: 'usage',
        message: 'Please add the Usage'
    },
    // License (multiple choice)
    {
        type: 'list',
        name: 'license',
        choices: ['MIT', 'The Unlicense', 'GNU', 'Bsd-2-Clause'],
        message: 'What is your project license type?'
    },
    // Contributing
    {
        type: 'input',
        name: 'contributions',
        message: 'Please add contributions'
    },
    // Questions
    {
        type: 'input',
        name: 'questions',
        message: 'Please add questions'
    },
    // GitHub username
    {
        type: 'input',
        name: 'gitusername',
        message: 'Please write your GitHub Username'
    },
    // email address
    {
        type: 'input',
        name: 'email',
        message: 'Please write your email'
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('success!');
        }
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            // Use user feedback for... whatever!!
            console.log(answers);
            const markdown = generateMarkdown(answers)
        });
}

// function call to initialize program
init();
