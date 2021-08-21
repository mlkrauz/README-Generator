const choices = require("./choices");

//Create choices for table of contents selection. I tried to make this as readable as possible, sorry!
const tableOfContents_choices = [
    choices.createChoice(
        'Description',
        { title: 'Description', use_In_TOC: false },
        '',
        {checked: true}
    ),
    choices.createChoice(
        'Table of Contents',
        { title: 'Table of Contents', use_In_TOC: false },
        ''
    ),
    choices.createChoice(
        'Media',
        { title: 'Media', use_In_TOC: false },
        ' --Images and videos'
    ),
    choices.createChoice(
        'Installation',
        { title: 'Installation', use_In_TOC: true },
        '',
        {checked: true}
    ),
    choices.createChoice(
        'Usage',
        { title: 'Usage', use_In_TOC: true },
        '',
        {checked: true}
    ),
    choices.createChoice(
        'License',
        { title: 'License', use_In_TOC: true },
        ''
    ),
    choices.createChoice(
        'Contributing',
        { title: 'Contributing', use_In_TOC: true },
        '',
        {checked: true}
    ),
    choices.createChoice(
        'Tests',
        { title: 'Tests', use_In_TOC: true },
        ''
        ),
    choices.createChoice(
        'Questions',
        { title: 'Questions and Contact Info', use_In_TOC: true },
        ' --and contact info'
    )
]

/**
 * Validator function. Checks if 'element.title' is equal to 'title'
 * @param {object} element 
 * @param {string} title 
 */
const containsString = (element, title) => {
    try {
        // Check for undefined args
        if (!element || !title) {
            throw new Error("Incorrect number of arguments.")
        }

        // Check types
        if (typeof element !== 'object' || typeof title !== 'string') {
            throw new Error("Incorrect type passed.")
        }

        return element.title === title

    } catch (err) {
        console.log(err)
    }
}

const questionBank = () => [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?'
    },
    {
        type: 'checkbox',
        name: 'tableOfContents',
        message: 'What would you like included in your readMe?',
        choices: tableOfContents_choices,
        pageSize: 9
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
        when: (answers) => answers.tableOfContents.some( (element) => containsString(element, 'Description') )
    },
    
    {
        type: 'input',
        name: 'media',
        message: 'What directory contains media you would like to embed?',
        when: (answers) => answers.tableOfContents.some( (element) => containsString(element, 'Media') )
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe how to install your project.',
        when: (answers) => answers.tableOfContents.some( (element) => containsString(element, 'Installation') )
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how to use your project.',
        when: (answers) => answers.tableOfContents.some( (element) => containsString(element, 'Usage') )
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license applies to your project?',
        //very limited list of licenses, but whatever
        choices: [
            choices.createChoice('MIT', 'MIT'),
            choices.createChoice('MPL 2.0', 'MPL 2.0', ' (Mozilla Public License 2.0)'),
            choices.createChoice('GPL v3', 'GPL v3', ' (GNU GPL v3)'),
            choices.createChoice('CC0', 'CC0', ' (Creative Commons)')
        ],
        when: (answers) => answers.tableOfContents.some( (element) => containsString(element, 'License') )
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Describe how (or if) others may contribute to your project.',
        when: (answers) => answers.tableOfContents.some( (element) => containsString(element, 'Contributing') )
    },
    {
        type: 'input',
        name: 'test',
        message: 'Describe how to test your project.',
        when: (answers) => answers.tableOfContents.some( (element) => containsString(element, 'Tests') )
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
        when: (answers) => answers.tableOfContents.some( (element) => containsString(element, 'Questions and Contact Info') )
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        when: (answers) => answers.tableOfContents.some( (element) => containsString(element, 'Questions and Contact Info') )
    }
];

module.exports = questionBank()