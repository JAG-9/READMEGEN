// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
const prompts = [{
    type: 'input',
		message: 'What is your project name?',
		name: 'Title'
	},{
		type: 'list',
		message: 'Which license did you use? Use arrow keys.',
        choices: ["MIT", "ISC", "Perl"],
		name: 'License'
	},{
		type: 'input',
		message: 'What is the purpose of this project?',
		name: 'Description'
	},{
		type: 'input',
		message: 'How do you install your project?',
		name: 'Installation'
	},{
		type: 'input',
		message: 'How does user use this project?',
		name: 'Usages',
    },{
        type:'input',
        message:"Who is contributing to this project?",
        name:'Contributions'
    }, {
        type:'input',
        message:'How do you test this project?',
        name: 'Test'
    }, {
        type:'input',
        message:'What is your GitHub username?',
        name:'Github Username'
    }, {
        type:'input',
        message:'What is your email address?',
        name:'Email'
}];

// TODO: Create a function to write README file
function createTemplate(data){
    return `
    ## ${data.Title}

## Description
${data.Description}

## Installation
${data.Installation}

## Usages
${data.Usages}

## Contributions
${data.Contributions}

## Testing
${data.Test}

## Contact Info

### GitHub: ${data['Github Username']}
### Email: ${data.Email}
`
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(prompts)
    .then((data) => {
        console.log(data)
        fs.writeFile('README.md', createTemplate(data), ()=> {
            console.log('success')
        })
    })
    .catch((error) => {
        if (error.isTtyError){
            console.log(error)
        } else {
            console.log(error)
        }
    })
}

// Function call to initialize app
init();
