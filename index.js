const inquirer = require('./node_modules/inquirer');
const fs = require('fs');
//const createMarkdown = require('')

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
    type: 'checkbox',
    message: 'Which sections do you wish to include? (RU required sections are already checked.)',
    name: 'sections',
    choices: [
      {
        name: 'Table of Contents',
        checked: true
      },
      {
        name: 'Installation',
        checked: true,
      },
      {
        name: 'Usage',
        checked: true,
      },
      {
        name: 'Visual Description',
        checked: true,
      },
      {
        name: 'License',
        checked: true,
      },
      new inquirer.Separator('--- optional ---'),
      {
        name: 'Contributing',
        checked: true,
      },
      {
        name: 'Tests',
        checked: true,
      },
      {
        name: 'Questions',
        checked: true,
      },
      {
        name: 'Features',
      },
      {
        name: 'Collaborators',
      },
      {
        name: 'Badges',
        checked: true,
      }
    ]
  },
  {
    type: 'input',
    message: 'Please list some of the features of this application separated by commas?',
    name: 'featuresDesc',
    validate: isQuesAnswered,
    when(answers) {
      return (answers.sections).includes('Features');
    }
  },
  {
    type: 'editor',
    message: 'How does a user install this application?',
    name: 'installationDesc',
    validate: isQuesAnswered,
    when(answers) {
      return (answers.sections).includes('Installation');
    }
  },
  {
    type: 'editor',
    message: 'How is this application intended to be used?',
    name: 'usageDesc',
    when(answers) {
      return (answers.sections).includes('Usage');
    }
  },
  {
    type: 'input',
    message: 'For a visual description, please include links to images or videos that have been uploaded, separated by commas.',
    name: 'visualDesc',
    when(answers) {
      return (answers.sections).includes('Visual Description');
    }
  },
  {
    type: 'editor',
    message: 'What tests can be performed on this application?',
    name: 'testingDesc',
    when(answers) {
      return (answers.sections).includes('Testing');
    }
  },
  {
    type: 'input',
    message: 'What is your Github for users to ask questions?',
    name: 'questionsDesc',
    when(answers) {
      return (answers.sections).includes('Questions');
    }
  },
  {
    type: 'input',
    message: 'Who else worked on this project with you? Separate collaborators with a comma.',
    name: 'collaborationDesc',
    when(answers) {
      return (answers.sections).includes('Collaboration');
    }
  },
  {
    type: 'input',
    message: 'How can other developers contribute to this application?',
    name: 'contributingDesc',
    when(answers) {
      return (answers.sections).includes('Contributing');
    }
  },
  {
    type: 'list',
    message: 'Choose a license to be used for this application',
    name: 'licenseDesc',
    choices: ['MIT', 'Mozilla Public License(MPL)'],
    when(answers) {
      return (answers.sections).includes('License');
    }
  },
  {
    type: 'editor',
    message: 'Badges Description',
    name: 'badgesDesc',
    when(answers) {
      return (answers.sections).includes('Badges');
    }
  },
];

inquirer.prompt(questions)
  .then((answers) =>
//    answers ? console.log(JSON.stringify(answers))
//      : console.log('No answers to the questions'));
   fs.writeFile('READEME.md', createMarkdown(answers), 
   error => {
    if(error) {
      console.error(error) 
    }
      console.log('Your READEME file was created!')
   } )
  )

