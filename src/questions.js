const choices = require("./choices");

const questionBank = [
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
            choices.createChoice('Table of Contents', 'Table of Contents', '', {checked: true}),
            choices.createChoice('Media', 'Media', ' --Images and videos'),
            choices.createChoice('Installation', 'Installation', '', {checked: true}),
            choices.createChoice('Usage', 'Usage', '', {checked: true}),
            choices.createChoice('License', 'License', '', {checked: true}),
            choices.createChoice('Contributing', 'Contributing', '', {checked: true}),
            choices.createChoice('Tests', 'Tests', '', {checked: true}),
            choices.createChoice('Questions', 'Questions', ' --and contact info', {checked: true})
        ]
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
    }
];

module.exports = {
    questionBank
}