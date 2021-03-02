const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
// const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const finalArray = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function generateTeam() {

    inquirer
        .prompt([
            {
                type: "list",
                message: "Are you finished adding employees?",
                name: "out",
                choices: ["Yes", "No"],
            },
        ])
        .then((confirm) => {
            if (confirm.out === "No") {

                inquirer.prompt([
                    {
                        type: "list",
                        message: "What's your role on this team?",
                        name: "role",
                        choices: ["Engineer", "Intern", "Manager"],
                    },

                    {
                        type: "input",
                        message: "Enter name:",
                        name: "name",
                        default: "Anonymous",
                    },


                    {
                        type: "input",
                        message: "Enter email address:",
                        name: "email",
                        default: "placeholder@autoflower.com",
                    },

                    {
                        type: "input",
                        message: "Employee ID:",
                        name: "id",
                        default: "#",
                    },

                ])

                    .then((data) => {
                        if (data.role === "Manager") {
                            inquirer.prompt([
                                {
                                    type: "input",
                                    message: "Enter office number:",
                                    name: "officeNumber",
                                    default: "#",
                                },
                            ])
                                .then((manage) => {
                                    const manager = new Manager(
                                        data.name,
                                        data.id,
                                        data.email,
                                        manage.officeNumber
                                    );

                                    if (
                                        finalArray.find((element) => element.role === "Manager")
                                    ) {
                                        console.log("Hello!");
                                        generateTeam();
                                    } else {
                                        finalArray.push(manager);
                                        generateTeam();
                                    }
                                });
                        } else if (data.role === "Engineer") {
                            inquirer.promp([
                                {
                                    type: "input",
                                    message: "Enter Github username:",
                                    name: "github",
                                    default: "Github Username",
                                },
                            ])
                                .then((engine) => {
                                    const engineer = new Engineer(
                                        data.name,
                                        data.id,
                                        data.email,
                                        engine.github
                                    );
                                    finalArray.push(engineer);
                                    generateTeam();
                                });
                        } else if (data.role === "Intern") {
                            inquirer.prompt([
                                {
                                    type: "input",
                                    message: "Enter school:",
                                    name: "school",
                                    default: "The Evergreen State College",
                                },
                            ])
                                .then((student) => {
                                    const intern = new Intern(
                                        data.name,
                                        data.id,
                                        data.email,
                                        student.school
                                    );
                                    finalArray.push(intern);
                                    generateTeam();
                                });
                            }

                        });
                    

            } else {
            produceHTML(render(finalArray)); 
            }
        });
    }

    generateTeam();

    const produceHTML = (savingString) => {
    fs.writeFile("./output/team.html", savingString, (err) => {
        if(err) throw err;
        console.log('Success!');
    });

};




// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!



// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
