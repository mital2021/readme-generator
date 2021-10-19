// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: "What is your project name?:",
        },

        {
            type: 'input',
            name: 'description',
            message: 'Please write description about your project:',

        },

        {
            type: 'input',
            name: 'installation',
            message: 'Please give information about installation instructions:',

        },

        {
            type: 'input',
            name: 'usage',
            message: 'Please give usage information detail:',

        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who contributed to this project:',

        },
        {
            type: 'input',
            name: 'test',
            message: 'Please give information about test instructions:',

        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license for application from a list of options:',
            choices: [
                "Apache",
                "Boost",
                "Mit",
            ]
        },

        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github username:',

        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:',

        },

    ])      
    
      };


// TODO: Create a function to write README file


     function writeToFile(data){
  
    fs.writeFile("README.md", (generate,(data)), err =>  {
        if (err) throw err;

            console.log('File created')

    }
    
    )};

 
// TODO: Create a function to initialize app
function init() {
    questions()
        .then(input => {
            const readmeGenerator = generate.generateMarkdown(input);
            writeToFile(readmeGenerator);
        })
 }

// Function call to initialize app
init();
