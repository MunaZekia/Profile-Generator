# Profile-Generator
# 10 Object-Oriented Programming: Team Profile Generator

## Description

Profile generator takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. 

As an employer I want to create an application that easily accessible so I can add my team through the command line


## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Mock-Up

The following image shows a mock-up of the generated HTML’s appearance and functionality:

[Untitled_ Feb 9 2023 2_00 PM.webm](https://user-images.githubusercontent.com/117357827/217927484-0765fcc6-3e5e-4184-be58-501592bd2852.webm)


## Excecuting program

User open the command line, then run node index.js. Then, question prompt is presented, which creates an html page that generate employees. 

## Authors 

Muna Zeki









