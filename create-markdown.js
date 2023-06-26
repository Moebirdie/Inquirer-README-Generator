// This file is referenced in the index.js file and creates the content of the README file

function licenseBadge(license) {
    if (license === 'MIT') {
        return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)'
    }
    if (license === 'Apache-2.0') {
        return '![License: Apache-2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)(https://opensource.org/licenses/Apache-2.0)'
    }
    if (license === 'GNU General Public License (GPL)') {
        return '![License: GPL](https://img.shields.io/badge/License-GPLv3-blue.svg)(https://opensource.org/licenses/gpl-3.0)'
    }
    if (license === 'Mozilla Public License (MPL)') {
        return '![License: MPL](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)(https://opensource.org/licenses/EPL-1.0)'
    }
}


function createMarkdown(answers) {
    return `# ${answers.rmTitle}
${licenseBadge(answers.licenseDesc)}

## Description
${answers.rmDescription1}. I chose this project because ${answers.rmDescription2}.
The skills used for developing this application include ${answers.rmDescription3}.

${answers.rmDescription4}

${answers.rmDescription5}

## Table of Contents
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [Visual Description](#Visual Description)
4. [Contributing](#Contributing)
5. [Tests](#Tests)  
6. [Questions](#Questions)
7. [License](#License)


## Features
${answers.featuresDesc}

## Usage
${answers.usageDesc}

## Visual Description
A visual representation of the working application can be seen here:
![${answers.imageName}](assets/images/${answers.imageNameType})

## Contributing
${answers.contributingDesc}

## Tests
${answers.testsDesc}

## Questions
Questions can be directed to ${answers.email} or submitted via my Github account at https://github.com/Moebirdie/Inquirer-README-Generator.

## License
[${answers.license}](https://opensource.org/licenses/${answers.license})
`;
}

module.exports = createMarkdown;