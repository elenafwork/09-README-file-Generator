// TODO: Include packages needed for this application
const fs=require('fs');
const inquirer=require('inquirer')
const generateMarkdown=require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
console.log('Hello. Welcome to README File Generator! ');
console.log('Please, answer the following questions for the successful result!');


const questions = [
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'title',
      },

      {
        type: 'input',
        message: 'Description: please, provide the description of your project',
        name: 'description',
      },
      {
        type: 'checkbox',
        message: 'technology used:',
        choices: ['HTML','CSS','JavaScript', 'JQuery', 'Bootstrap', 'Web API', 'NodeJS', 'Inquirer v8.2.4'],
        name: 'technology',
      },
      {
        type: 'input',
        message: 'Installation: please, provide the information about the project installation',
        name: 'installation',
      },
      
      {
        type: 'input',
        message: 'Usage: please, provide the information how to use your project',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Credits: please, provide the information about the possible project contributors',
        name: 'credits',
      },
      {
        type: 'list',
        message: 'License: please, provide the information about license',
        choices: ['None', 'Apace License 2.0', 'GNU General Public License v3.0','MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0', 'Eclipse Public License 2.0', 'GNU Affero Public License v3.0','GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0','The Unlicense' ],
        name: 'license',
      },
      {
        type: 'input',
        message: 'Contacts: please, provide your GitHub profile (required) for users to reach you',
        name: 'github',
      },
      {
        type: 'input',
        message: 'Contacts: please, provide your email address for users to reach you',
        name: 'email',
      }

  
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) =>{
        error ? console.error(error)
        : console.log('Success!');
        
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
.prompt(questions)
.then((data)=> {
    console.log('Thank you!');
              
    writeToFile("./README-sample.md", generateMarkdown(data));
        
     
}) 
}

// Function call to initialize app
init();
