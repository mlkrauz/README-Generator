const createChoice = require("./choices");

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
            createChoice('Description', '', {checked: true}),
            createChoice('Table of Contents', '', {checked: true}),
            createChoice('Media', ' --Images and videos'),
            createChoice('Installation', '', {checked: true}),
            createChoice('Usage', '', {checked: true}),
            createChoice('License', '', {checked: true}),
            createChoice('Contributing', '', {checked: true}),
            createChoice('Tests', '', {checked: true}),
            createChoice('Questions', ' --and contact info', {checked: true})
        ]
    },
];

module.exports = {
    questionBank
}