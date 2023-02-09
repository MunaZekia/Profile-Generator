const inquirer = require("inquirer")
const Manager = require("./lib/Manager.js")
const fs = require("fs")
const path = require("path");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const prompt = inquirer.createPromptModule();
let finalHtml = ""

async function promptForManager() {

   const answer = await prompt([
      {
         type: "input",
         name: "name",
         message: "what is your manager's name"
      },
      {
         type: "input",
         name: "ID",
         message: "what is your manager's employee ID"
      },
      {
         type: "input",
         name: "email",
         message: "what is your manager's email"
      },
      {
         type: "input",
         name: "officeNumber",
         message: "what is your manager's office number?"
      },
   ])

   const manager = new Manager(answer.name, answer.ID, answer.email, answer.officeNumber);

   // console.log("manager: ", manager)

   return manager;
}

async function promptForEngineer() {

   const answer = await prompt([
      {
         type: "input",
         name: "name",
         message: "what is your engineer's name"
      },
      {
         type: "input",
         name: "ID",
         message: "what is your engineer's employee ID"
      },
      {
         type: "input",
         name: "email",
         message: "what is your engineer's email"
      },
      {
         type: "input",
         name: "github",
         message: "what is your engineer's GitHub username?"
      },
   ])

   const engineer = new Engineer(answer.name, answer.ID, answer.email, answer.github);
   return engineer;
}

async function promptForIntern() {

   const answer = await prompt([
      {
         type: "input",
         name: "name",
         message: "what is your intern's name"
      },
      {
         type: "input",
         name: "ID",
         message: "what is your intern's employee ID"
      },
      {
         type: "input",
         name: "email",
         message: "what is your intern's email"
      },
      {
         type: "input",
         name: "school",
         message: "what is your intern's school?"
      },
   ])

   const intern = new Intern(answer.name, answer.ID, answer.email, answer.school);
 
   return intern;
}

async function promptForEmployees() {

   while (true) {
      const answer = await prompt([
         {
            type: "list",
            name: "choice",
            message: "What do you want to do?",
            choices: ["Add an Engineer", "Add an Intern", "Exit"]
         }
      ])

      if (answer.choice == "Add an Engineer") {
         const eng = await promptForEngineer();
        finalHtml += generateEmployeeCardHtml(eng)
      
      } else if (answer.choice == "Add an Intern") {
         const intern = await promptForIntern();
         finalHtml += generateEmployeeCardHtml(intern)
         
      } else {
         return;
      }
   }

}

function generateEmployeeCardHtml(emp) {
   console.log(emp)
   let custom = ""
   if (emp.getRole() == "Manager") {
       custom = `<p> Office number: ${emp.officeNumber}</p>`
   } else if (emp.getRole() == "Engineer") {
       custom = `<p> GitHub: <a href= "www.github.com/${emp.github}">${emp.github}</a></p>`
   } else {
      custom = `<p> School: ${emp.school}</p>`
   }
   return `
    <link rel="stylesheet" href="styles.css">  
      <section class = "card">
         <header>
            <h1> ${emp.name} </h1>
            <h2> ${emp.getRole()} </h2>
         </header>
         <div>
            <p> ID:${emp.ID} </p>
            <p> Email: <a href="mailto:${emp.email}">${emp.email}</a></p>
         ${custom}
            </div>
      </section>
   `
}

 async function createTeamPageFile() {
    fs.writeFile(path.join(__dirname, "team.html"), "<html><head> <meta charset= 'UTF-8'><title> My Team </title></head> <body> <h1> My Team </h1>" +finalHtml +"</body></html>", (error, data) => 
    {       if (error) throw error;
       console.log(data)
    })
 }

async function start() {
   const manager = await promptForManager();
   const mgrhtml = generateEmployeeCardHtml(manager)
   finalHtml += mgrhtml
    await promptForEmployees();


   await createTeamPageFile();
}

start();