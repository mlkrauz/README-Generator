const inquirer = require("inquirer");
const fs = require('fs');
const questions = require('./src/questions');

// Prompt questions and recieve answers
inquirer.prompt(questions)
.then(
    (answers) => buildReadme(answers)
)
.then(
    (readmeString) => generateReadme(readmeString)
)

/**
 * // Takes in an inquirer answers object, and builds a readMe string.
 * @param {Object} answers 
 */
function buildReadme(answers) {
    console.log(answers)

    // Destructure the answers object
    const { projectName, tableOfContents, description, media, installation,
        usage, license, contribute, test, github, email
    } = answers;

    // an object containing/handling the strings to be appended to our readme.
    let readmeStrings =  {
        header: `# ${projectName}`,
        licenseBadge: '',
        description: `## Description \n ${description}`,
        tableOfContents: '',
        media: '',
        installation: '',
        usage: '',
        license: '',
        contribute: '',
        test: '',
        questions: ''
    }

    /**
     * @returns a single line of the table of contents in Markdown notation
     */
    const single_TOC_Line = (item) => {
        if (item.use_In_TOC) {
            // return table of contents line
            return  `- [${item.title}](## ${item.title}) \n` 
        } else {
            // return empty string
            return ''
        }
    }

    // conditionally update our readmeStrings
    if (tableOfContents) {
        let newTableOfContents = `## Table of Contents \n`

        // Add all table of content lines and append to 'newTableOfContents'
        tableOfContents.map(
            (item) => newTableOfContents += single_TOC_Line(item)
        )

        readmeStrings.tableOfContents = newTableOfContents
    }



}

/**
 * //Takes in a string and generates a readme file.
 * @param {String} readMeString 
 */
function generateReadme(readMeString) {
    console.log("./README.md created!")
}