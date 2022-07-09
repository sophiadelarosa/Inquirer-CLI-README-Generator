//packages needed for the application
const inquirer =require('inquirer')
const fs= require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

//arrays of questions and section titles
questions = ["What is the name of your project?", "Please briefly describe your project.", "What license do you use?", "Please list any installation instructions.", "Please list any usage information.", "Please list any contribution guidelines.", "Please list any testing instructions.", "Please enter your github username.", "Please enter your github link.", "Please enter your email?"];

//question prompts
inquirer.prompt(
    [{
        message: questions[0],
        type:"input",
        name:'title'
    },
    {
        message: questions[1],
        type:"input",
        name:'description'
    },
    {
        message: questions[2],
        type:"list",
        name:'license',
        choices: ['GNU', 'Mozilla public license','Apache', 'MIT', 'Boost software license', 'none']
    },
    {
        message: questions[3],
        type: "input",
        name: 'installation'
    },
    {
        message: questions[4],
        type: "input",
        name: 'usage'
    },
    {
        message: questions[5],
        type: "input",
        name: 'contributing'
    },
    {
        message: questions[6],
        type: "input",
        name: 'tests'
    },
    {
        message: questions[7],
        type: "input",
        name: 'username'
    },
    {
        message: questions[8],
        type: "input",
        name: 'link'
    },
    {
        message: questions[9],
        type: "input",
        name: 'email'
    }]
).then ( answers => {console.log(answers)

fs.writeFileSync('README.md', generateMarkdown(answers))})

