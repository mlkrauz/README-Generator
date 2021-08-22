const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');
const questions = require('./src/questions');
const buildReadme = require('./src/readmeBuilder').buildReadme

/**
 * Main function
 */
async function init() {
    // Prompt questions and recieve answers
    const answers = await inquirer.prompt(questions)
    
    // Generate markdown using answers
    const readMeString = await buildReadme(answers)

    // write out the markdown!
    generateReadme(readMeString)
}

/**
 * Takes in a string and generates a readme file.
 * @param {String} readMeString 
 */
async function generateReadme(readMeString) {

    // Wrap writefile in a promise
    const asyncWriteFile = util.promisify(fs.writeFile)

    // Write out markdown and generate readme 
    asyncWriteFile('./README.md', readMeString)
    console.log("./README.md created!")
}

// Initialize project
init()