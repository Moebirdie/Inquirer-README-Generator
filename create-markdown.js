// This file is referenced in the index.js file and creates the content of the README file

function licenseBadge(license) {
    if (license === 'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }
    if (license === 'Apache-2.0') {
        return '[![License: Apache-2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0'
    }
    if (license === 'GNU General Public License (GPL)') {
        return '[![License: GPL](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/GPLv3)'
    }
    if (license === 'Mozilla Public License (MPL)') {
        return '[![License: MPL](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL)'
    }
}

function insertImage1(answers) {
    image = answers.imageName1;
    desc = answers.imageDesc1;
    imageData = '![desc](assets/images/' + image + ')'
    if (answers.imageName1) {
        return `User Input Experience:   

${imageData}`
    } else {
        return ""
    }
}
function insertImage1a(answers) {
    image = answers.imageName1a;
    desc = answers.imageDesc1a;
    imageData = '![desc](assets/images/' + image + ')'
    if (answers.imageDesc1a) {
        return `${desc}  

${imageData}`
    } else {
        return ""
    }
}
function insertImage2(answers) {
    image = answers.imageName2;
    desc = answers.imageDesc2;
    imageData = '![desc](assets/images/' + image + ')'
    if (answers.imageDesc2) {
        return `${desc}  

${imageData}`
    } else {
        return ""
    }
}
function insertImage3(answers) {
    image = answers.imageName3;
    desc = answers.imageDesc3;
    imageData = '![desc](assets/images/' + image + ')'
    if (answers.imageDesc3) {
        return `${desc}  

${imageData}`
    } else {
        return ""
    }
}

function insertImage4(answers) {
    image = answers.imageName4;
    desc = answers.imageDesc4;
    imageData = '![desc](assets/images/' + image + ')'
    if (answers.imageDesc4) {
        return `${desc}  

${imageData}`
    } else {
        return ""
    }
}

function insertImage5(answers) {
    image = answers.imageName5;
    desc = answers.imageDesc5;
    imageData = '![desc](assets/images/' + image + ')'
    if (answers.imageDesc5) {
        return `${desc}  

${imageData}`
    } else {
        return ""
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
2. [Features](#Features)
3. [Usage](#Usage)
4. [Visual Description](#Visual-Description)
5. [Contributors](#Contributing)
6. [Tests](#Tests)  
7. [Questions](#Questions)
8. [License](#License)
  

## Installation <a id="Installation"></a>

${answers.installationDesc}
  

## Features <a id="Features"></a>

Features exhibited in this application include ${answers.featuresDesc}.
  

## Usage <a id="Usage"></a>

${answers.usageDesc}
  

## Visual Description <a id="Visual-Description"></a>

A visual representation of the working application may be seen here:  

${insertImage1(answers)}  

${insertImage1a(answers)}  

${insertImage2(answers)}  

${insertImage3(answers)}  

${insertImage4(answers)}  

${insertImage5(answers)}  

A walkthrough video of the product may be viewed here: INSERT VIDEO HERE

## Contributors <a id="Contributing"></a>

${answers.contributingDesc}
  

## Tests <a id="Tests"></a>

${answers.testsDesc}
  

## Questions  <a id="Questions"></a>

Questions can be directed to ${answers.email} or submitted via my Github account at [${answers.github}](${answers.github}).
  

## License <a id="License"></a>

[${answers.licenseDesc}](https://opensource.org/licenses/${answers.licenseDesc})
`;
}

module.exports = createMarkdown;