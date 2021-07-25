//The way we were taught to do it
//const inquirer = require("inquirer");

//the cool ES6 way vscode recommended it be done
import inquirer from 'inquirer';
import fs from 'fs';

inquirer.prompt(
    [
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project?'
        }
        /*
        ,
        {
            type: 'checkbox',
            name: 'tableOfContents',
            message: 'What would you like included in your Table of Contents?',
            choices: [
                {
                    //does not work
                    name: `${value.title}${value.hint}`,
                    value: {
                        title: 'Description',
                        hint: ''
                    }
                    
                }
            ]
        }
        */

    ]
)