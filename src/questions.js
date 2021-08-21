const choices = require("./choices");

const questionBank = () => [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?'
    },
    {
        type: 'checkbox',
        name: 'tableOfContents',
        message: 'What would you like included in your Table of Contents?',
        choices: [
            choices.createChoice('Description', 'Description', '', {checked: true}),
            choices.createChoice('Table of Contents', 'Table of Contents', ''),
            choices.createChoice('Media', 'Media', ' --Images and videos'),
            choices.createChoice('Installation', 'Installation', '', {checked: true}),
            choices.createChoice('Usage', 'Usage', '', {checked: true}),
            choices.createChoice('License', 'License', ''),
            choices.createChoice('Contributing', 'Contributing', '', {checked: true}),
            choices.createChoice('Tests', 'Tests', ''),
            choices.createChoice('Questions', 'Questions', ' --and contact info')
        ],
        pageSize: 9
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
        when: (answers) => answers.tableOfContents.includes('Description')
    },
    {
        type: 'input',
        name: 'media',
        message: 'What directory contains media you would like to embed?',
        when: (answers) => answers.tableOfContents.includes('Media')
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe how to install your project.',
        when: (answers) => answers.tableOfContents.includes('Installation')
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how to use your project.',
        when: (answers) => answers.tableOfContents.includes('Usage')
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
        when: (answers) => answers.tableOfContents.includes('License')
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Describe how (or if) others may contribute to your project.',
        when: (answers) => answers.tableOfContents.includes('Contributing')
    },
    {
        type: 'input',
        name: 'test',
        message: 'Describe how to test your project.',
        when: (answers) => answers.tableOfContents.includes('Tests')
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
        when: (answers) => answers.tableOfContents.includes('Questions')
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        when: (answers) => answers.tableOfContents.includes('Questions')
    }
];

module.exports = questionBank()