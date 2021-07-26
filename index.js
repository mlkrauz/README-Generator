//The way we were taught to do it
const inquirer = require("inquirer");
const fs = require('fs');
const questions = require('./src/questions');


inquirer.prompt(
    questions.questionBank
)
.then((answers) => console.log(answers))