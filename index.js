//global variable

const inquirer = require('inquirer');
const { writeFile } = require('./src/create-file.js');
const generateREADME = require('./src/readme-template');

//user prompt 

const promptUser = dataReadme => {

  console.log(`
================================================
Generating a Professional README file in Node.js
================================================
`);

  return inquirer.prompt([
    // Section README Title
    {
      type: 'input',
      name: 'title',
      message: 'What is project title? (Required): ',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter your Project Title! ');
          return false;
        }
      }
    },
 // Section Description
    {
        type: 'input',
        name: 'description',
        message: 'Bring a brief description about your Project (Required): ',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter a Description! ');
            return false;
          }
        }
    },
// Section Instalation
    {
        type: 'input',
        name: 'install',
        message: 'How to install (Required): ',
        validate: installInput => {
            if (installInput) {
            return true;
            } else {
            console.log('Place the way to install!');
            return false;
            }
        }
    },
// Section Usage
    {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Would you like to enter some information about the "Usage" section? ',
        default: true
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide some examples or code to show the Application Usage: ',
        when: ({ confirmUsage }) => {
            if (confirmUsage) {
              return true;
            } else {
              return false;
            }
          }
    },
    // Section Contributions Guidelines
    {
        type: 'confirm',
        name: 'confirmContribution',
        message: 'Would you like to enter some information about the "Contribution" section? ',
        default: true
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Mention and Aknowledge the Contributors: ',
        when: ({ confirmContribution }) => {
            if (confirmContribution) {
              return true;
            } else {
              return false;
            }
          }
    },
// Section Test
    {
        type: 'input',
        name: 'test',
        message: 'Give a few examples of running code (Required): ',
        validate: testInput => {
            if (testInput) {
            return true;
            } else {
            console.log('Please give some examples for testing coding!');
            return false;
            }
        }
    },
// Section Badges - License
    {
        type: 'rawlist',
        name: 'license',
        message: 'What Technologies did you use in this project with? (Check all that apply)',
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'Mozilla Public License 2.0']
    },
//Questions
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username (Required): ',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your Githubname!');
          return false;
        }
      }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please Enter your email (Required): ',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email!');
            return false;
          }
        }
      },
  ]);
};



promptUser()
  .then( data => {
    //console.log(data);
    return generateREADME(data);
  })
   .then(fileReadme => {
     return writeFile(fileReadme);
   })
  .then(writeFileResponse => {
    console.log(`
================================================
Finilizing. Wait while the App create the file
================================================
`);
    console.log(writeFileResponse);
   })
  .catch(err => {
    console.log(err);
  });

