/*
A function which returns a choice object for inquirer. 
INPUTS:
    'value' : REQUIRED. 
        Must be a string. This is the final value used as an answer.
    'hint' : REQUIRED.
        Must be a string. This will be additional information viewed in the commandline only.
        If omitted, it will be an empty string. In a way, that makes this param optional,
        but I don't like javascripts lack of function overloading and do not want to handle someone
        calling the constructor with ('value', 'inquirerParams')
    'inquirerParams' : OPTIONAL.
        Must be an object. Used to pass in inquirer params such as 'checked' or 'disabled'.
        Has some form of validation 
RETURNED:
    An object containing a 'name', to be displayed in command line,
    a 'value' object to be passed as an answer,
    plus any inquerer params passed in, such as 'checked' or 'disabled'
*/
function createChoice(userValue, userHint, inquirerParams) {
    let validParams = false;
    const validKeysList = ['checked', 'disabled', 'short'];
    //take in a key; return true/false depending on validKeysList contains that key
    const inquirerParamsValidator = (key) => validKeysList.includes(key);

    //input validations
    if (typeof userValue !== 'string') {
        throw new Error('Value passed in was not a string!');
    }
    if (typeof userHint !== 'string') {
        userHint = '';
    }
    if (typeof inquirerParams === 'object') {
        //if ALL the properties keys of inquiererParams return true when validated against inquirerParamsValidator
        if (Object.keys(inquirerParams).every(inquirerParamsValidator)) {
            validParams = true;
        } else {
            throw new Error(`One or more of the properties passed to inquirerParams is not valid. (${validKeysList.join('/')})`);
        }
    } else if (typeof inquirerParams !== 'undefined') {
        throw new Error('Type passed to inquirerParams is not an object!');
    }

    //create our object to return
    let choiceObject = {
        name: `${userValue}${userHint}`,
        value: {
            value: userValue,
            //hint: userHint
        }
    }

    //did the user pass in a valid inquirerParams object?
    if (validParams) {
        //a neat use for the spread operator!
        choiceObject = {...choiceObject, ...inquirerParams};
    }

    //return the final object!
    return choiceObject;

}

module.exports = {
    createChoice
};