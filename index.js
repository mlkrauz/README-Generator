const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');
const questions = require('./src/questions');

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
 * // Takes in an inquirer answers object, and builds a readMe string.
 * @param {Object} answers 
 */
async function buildReadme(answers) {
    // Destructure the answers object
    const { projectName, tableOfContents, description, media, installation,
        usage, license, contribute, test, github, email
    } = answers;

    // an object containing/handling the strings to be appended to our readme.
    let readMeStrings =  {
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

    // conditionally update our readMeStrings
    if (tableOfContents) {
        let newTableOfContents = `## Table of Contents \n`

        // Add all table of content lines and append to 'newTableOfContents'
        tableOfContents.map(
            (item) => newTableOfContents += single_TOC_Line(item)
        )

        readMeStrings.tableOfContents = newTableOfContents
    }


    //Gets all readMeString values, and joins them. A new line is inserted between each value.
    return Object.values(readMeStrings).join('\n')
}

/**
 * //Takes in a string and generates a readme file.
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