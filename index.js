const inquirer = require("inquirer");
const fs = require('fs');
const questions = require('./src/questions');

//Prompt questions and recieve answers
inquirer.prompt(questions)
.then(
    (answers) => buildReadme(answers)
)

/**
 * //Takes in an inquirer answers object, and builds a readMe string.
 * @param {Object} answers 
 */
function buildReadme(answers) {
    console.log(answers)
}

/**
 * //Takes in a string and generates a readme file.
 * @param {String} readMeString 
 */
function generateReadme(readMeString) {
    
}