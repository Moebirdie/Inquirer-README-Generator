const inquirer = require('./node_modules/inquirer');
const fs = require('fs');
const createMarkdown = require('./create-markdown');

const isQuesAnswered = async (input) => {
  if (input) {
    return true;
  }
  return "Answer is required."
};

const questions = [
  {
    type: 'input',
    message: 'What is your README Title?',
    name: 'rmTitle',
    validate: isQuesAnswered
  },
  {
    type: 'input',
    message: 'In one sentence, what is this application designed for?',
    name: 'rmDescription1',
    validate: isQuesAnswered
  },
  {
    type: 'input',
    message: 'Complete this sentence: I chose this project because ...',
    name: 'rmDescription2'
  },
  {
    type: 'input',
    message: 'What skills, technology did you use to create this application? (separate with commas)',
    name: 'rmDescription3'
  },
  {
    type: 'editor',
    message: 'Why did you use those tools?',
    name: 'rmDescription4'
  },
  {
    type: 'editor',
    message: 'What were some of the challenges you faced creating this application?',
    name: 'rmDescription5'
  },
  {
    type: 'input',
    message: 'Please list some of the features of this application separated by commas?',
    name: 'featuresDesc',
    validate: isQuesAnswered
  },
  {
    type: 'editor',
    message: 'How does a user install this application?',
    name: 'installationDesc',
    validate: isQuesAnswered
  },
  {
    type: 'editor',
    message: 'How is this application intended to be used?',
    name: 'usageDesc',
    validate: isQuesAnswered
  },
  {
    type: 'input',
    message: 'For a visual description, please be sure images are loaded into assets/images.  Include here image Name and file type',
    name: 'visualDesc',
  },
  {
    type: 'editor',
    message: 'What tests can be performed on this application?',
    name: 'testsDesc',
    validate: isQuesAnswered
  },
  {
    type: 'input',
    message: 'What is your Github for users to ask questions?',
    name: 'questionsDesc',
    validate: isQuesAnswered
  },
  {
    type: 'input',
    message: 'Who else worked on this project with you? Separate collaborators with a comma.',
    name: 'collaborationDesc',
    validate: isQuesAnswered
  },
  {
    type: 'input',
    message: 'How can other developers contribute to this application?',
    name: 'contributingDesc',
    validate: isQuesAnswered
  },
  {
    type: 'list',
    message: 'Choose a license to be used for this application',
    name: 'licenseDesc',
    choices: ['Apache-2.0','GNU General Public License (GPL)','MIT', 'Mozilla Public License (MPL)'],
    validate: isQuesAnswered
  },
];

inquirer.prompt(questions)
  .then((answers) =>
//    answers ? console.log(JSON.stringify(answers))
//      : console.log('No answers to the questions'));
   fs.writeFile('READEME.md', createMarkdown(answers), 
   err => {
    if(err) {
      console.error(err) 
    }
      console.log('Your READEME file was created!')
   } )
  )

  

