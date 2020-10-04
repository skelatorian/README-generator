//confirm function

const getMessage = (confirm, message) => { 
    if(confirm) 
        return message;
};

// badge

const getBadge = license =>{
    switch(license) {
        case "Apache License 2.0":
          return "![v1](https://img.shields.io/static/v1?label=License&message=Apache&color=red&&style=plastic)";
        case "GNU General Public License v3.0":
          return "![v1](https://img.shields.io/static/v1?label=License&message=GNU&color=yellowgreen&&style=plastic)";
        case "Mozilla Public License 2.0":
            return "![v1](https://img.shields.io/static/v1?label=License&message=Mozilla&color=orange&&style=plastic)";
        case "MIT License":
            return "![v1](https://img.shields.io/static/v1?label=License&message=MIT&color=green&&style=plastic)";
        case "None":
            return "![v1](https://img.shields.io/static/v1?label=License&message=None&color=inactive&&style=plastic)";    
    }
};
 //text for license

const getDiscloseLicense = (license, title) =>{
    let message =" ";
    switch(license) {
        case "Apache License 2.0":
            message = `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

Permissions | Limitations  |   Conditions
------------ | ------------  | ------------
Commercial use | Liability |  License and copyright notice
Modification | Warranty    |  State changes
Distribution | Trademark use   |
Private use |     |
Patent use |     |`;
            return message;

        case "GNU General Public License v3.0":
            message = `Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.
            
Permissions | Limitations  |   Conditions
------------ | ------------  | ------------
Commercial use | Liability |  License and copyright notice
Modification | Warranty    |  State changes
Distribution |   |  Disclose source
Private use |     |     Same license
Patent use |     |`;
            return message;

        case "Mozilla Public License 2.0":
            message = `Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work

Permissions | Limitations  |   Conditions
------------ | ------------  | ------------
Commercial use | Liability |  License and copyright notice
Modification | Warranty    |  Same license (file)
Distribution | Trademark use  |  Disclose source
Private use |     |
Patent use |     |`;
            return message;

        case "MIT License":
            message = `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

Permissions | Limitations  |   Conditions
------------ | ------------  | ------------
Commercial use | Liability |   License and copyright notice
Modification | Warranty    |
Distribution |     |
Private use |     |`;
            return message;
            
        case "None":
            return message;    
    }
};
//template for readme
module.exports = templateData => {
    // destructure data by section to get the information
    const { title, description, install, confirmUsage, usage, confirmContribution, contribution, test, license, github, email} = templateData;
  
    return `
${getBadge(license)}

# ${title}

## Description 

${description}


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#Contributing)
* [License](#license)
* [Test](#Test)
* [Questions](#questions) 


## Installation

${install}


## Usage 

${getMessage(confirmUsage, usage)}


## Contributing

${getMessage(confirmContribution, contribution)}


## License

${title} is licensed under the

${getBadge(license)}

${license}

${getDiscloseLicense(license, title)}


## Test

${test}


## Questions

If you have any questions about the application, you can check the documentation on my GitHub profile [https://github.com/${github}](https://github.com/${github}).

for more information you can have a question via email [${email}](${email})  .
    `;
  };

