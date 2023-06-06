const licenses=[
 
  {
    name: 'Apace License 2.0',
    badgeLink: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg ',
    link: 'https://opensource.org/licenses/Apache-2.0' 

  },
  {
    name: 'GNU General Public License v3.0',
    badgeLink: 'https://img.shields.io/badge/License-GPLv3-blue.svg ',
    link: 'https://www.gnu.org/licenses/gpl-3.0' 

  },
  {
    name: 'MIT License',
    badgeLink: 'https://img.shields.io/badge/License-MIT-yellow.svg',
    link: 'https://opensource.org/licenses/MIT' 

  },
  {
    name: 'BSD 2-Clause "Simplified" License',
    badgeLink: 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg',
    link: 'https://opensource.org/licenses/BSD-2-Clause' 

  },
  {
    name: 'BSD 3-Clause "New" or "Revised" License',
    badgeLink: 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
    link: 'https://opensource.org/licenses/BSD-3-Clause' 

  },
  {
    name: 'Boost Software License 1.0',
    badgeLink: 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
    link: 'https://www.boost.org/LICENSE_1_0.txt' 

  },
  {
    name: 'Creative Commons Zero v1.0',
    badgeLink: 'https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg',
    link: 'http://creativecommons.org/publicdomain/zero/1.0/' 

  },
  {
    name: 'Eclipse Public License 2.0',
    badgeLink: 'https://img.shields.io/badge/License-EPL_1.0-red.svg',
    link: 'https://opensource.org/licenses/EPL-1.0' 

  },
  {
    name: 'GNU Affero Public License v3.0',
    badgeLink: 'https://img.shields.io/badge/License-AGPL_v3-blue.svg',
    link: 'https://www.gnu.org/licenses/agpl-3.0' 

  },
  {
    name: 'GNU General Public License v2.0',
    badgeLink: 'https://img.shields.io/badge/License-GPL_v2-blue.svg',
    link: 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html' 

  },

  {
    name: 'GNU Lesser General Public License v2.1',
    badgeLink: 'https://img.shields.io/badge/License-LGPL_v3-blue.svg',
    link: 'https://www.gnu.org/licenses/lgpl-3.0' 

  },
  
  {
    name: 'Mozilla Public License 2.0',
    badgeLink: 'https://img.shields.io/badge/License-MIT-yellow.svg',
    link: 'https://opensource.org/licenses/MPL-2.0' 

  },
  
  {
    name: 'The Unlicense',
    badgeLink: 'https://img.shields.io/badge/license-Unlicense-blue.svg',
    link: 'http://www.wtfpl.net/about/' 

  }
]


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  for(const element of licenses ){
   if (license=='None'){
    return ' '
   }else if(element.name== license){
      
      return `[![License](${element.badgeLink})](${element.link})`
    }
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 
  for(const element of licenses ){
    
    if (license=='None'){
      
      return ' ';
     }else if(element.name== license){
        
        return element.link;
      }
    }
   
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  renderLicenseLink(license)
 
 
  if (license=='None'){
    return 'The project does not have a License'
  } else{
   return `Licensed under [${license} ](${renderLicenseLink(license)})`
  }
}





function technologyUsed(data){
  const technologies=data.technology;
  
  return technologies.join(', ');
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    
  return `
  # ${data.title}
   
  
  ${renderLicenseBadge(data.license)}

  ## Table of Content
  - [Description](#description)
  - [Technology Used](#technology)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Questions](#questions)

  ## Description
  ${data.description}
  ## Technology Used
  ${technologyUsed(data)}
  ## Installation
  ${data.installation}
  ## Usage 
  ${data.usage}
  ## Credits
  ${data.credits}
  ## License
  ${renderLicenseSection(data.license)}
 
  ## Questions
  If you have any questions regarding the project, please, feel free to contact me:
  - GitHub: [${data.github}](https://github/${data.github})
  - Email: <${data.email}>


`;
}

module.exports = generateMarkdown;
