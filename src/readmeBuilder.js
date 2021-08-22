
/**
 * Takes in an inquirer answers object, and builds a readMe string.
 * @param {Object} answers 
 */
async function buildReadme(answers) {
    // Destructure the answers object
    const { projectName, tableOfContents, description, media, installation,
        usage, license, contribute, test, github, email
    } = answers;

    // an object containing/handling the strings to be appended to our readme.
    let readMeStrings = {
        header: `# ${projectName}`,
        licenseBadge: '',
        description: `## Description\n${description}`,
        tableOfContents: '',
        media: '',
        installation: '',
        usage: '',
        license: '',
        contribute: '',
        test: '',
        questions: ''
    }

    // conditionally update our readMeStrings
    if (tableOfContents) {
        let newTableOfContents = `## Table of Contents\n`

        /**
        * @returns a single line of the table of contents in Markdown notation
        */
        const single_TOC_Line = (item) => {
            if (item.use_In_TOC) {
                // return table of contents line - replace spaces with hyphens and convert to lowercase to match github anchor links
                return  `* [${item.title}](#${item.title.replaceAll(' ','-').toLowerCase()})\n` 
            } else {
                // return empty string
                return ''
            }
        }

        // Add all table of content lines and append to 'newTableOfContents'
        tableOfContents.map(
            (item) => newTableOfContents += single_TOC_Line(item)
        )
        
        // Assign
        readMeStrings.tableOfContents = newTableOfContents
    }
    if (media) {
        readMeStrings.media = `![Project media](${media})\n`
    }
    if (installation) {
        readMeStrings.installation = `## Installation\n${installation}`
    }
    if (usage) {
        readMeStrings.usage = `## Usage\n${usage}`
    }
    if (license) {
        const defaultMessage = (license) => `## License\nThis project is licensed under '${license}'. Please see LICENSE file for more info.`

        switch (license) {
            case 'MIT':
                readMeStrings.licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
                readMeStrings.license = defaultMessage('MIT')
                break
            case 'MPL 2.0':
                readMeStrings.licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
                readMeStrings.license = defaultMessage('MPL 2.0')
                break
            case 'GPL v3':
                readMeStrings.licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
                readMeStrings.license = defaultMessage('GPL v3')
                break
            case 'CC0':
                readMeStrings.licenseBadge = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
                readMeStrings.license = defaultMessage('CC0')
                break
        }
    }
    if (contribute) {
        readMeStrings.contribute = `## Contributing\n${contribute}`
    }
    if (test) {
        readMeStrings.test = `## Tests\n${test}`
    }
    if (github && email) {
        readMeStrings.questions = `## Questions and Contact Info\n* Github: https://github.com/${github}\n* Email: ${email}`
    }

    //Gets all readMeString values, removes empty strings, and joins what remains. A new line is inserted between each value.
    return Object.values(readMeStrings).filter(element => element !== '').join('\n\n')
}

module.exports = { buildReadme }