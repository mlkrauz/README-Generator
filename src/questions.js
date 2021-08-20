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
            choices.createChoice('Description', '', {checked: true}),
            choices.createChoice('Table of Contents', '', {checked: true}),
            choices.createChoice('Media', ' --Images and videos'),
            choices.createChoice('Installation', '', {checked: true}),
            choices.createChoice('Usage', '', {checked: true}),
            choices.createChoice('License', '', {checked: true}),
            choices.createChoice('Contributing', '', {checked: true}),
            choices.createChoice('Tests', '', {checked: true}),
            choices.createChoice('Questions', ' --and contact info', {checked: true})
        ]
    },
];

module.exports = questionBank()