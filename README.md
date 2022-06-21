**Project**: studying-ts-automation-process

**Project setup**
- Visual Studio code
- Node.js
- TypeScript
- Cypress
//will add here some new points later

**How to run the project**
- Create a new folder for your project on your local PC
- Cloned the repository from Github https://github.com/AlexandraPopovaz/studying-ts-automation-process.git
- Run **git init** (create your local repo)
- Run **npm init** (create a Package.json file)
- Run **npm install cypress --save-dev** (install Cypress app - two folders will be created: 
     1-"node_modules", 2-"package-lock.json")
- Run **npm run cy:open** (Cypress window will be open)

**How to create a new test**
- Run **git checkout -b branch_name** (a new branch will be created and you will be switched on it)
- Run **npm run cy:open** (Cypress window will be open)
- Create a new spec.file in the "e2e" folder
- Write "yourTest.cy.js" test inside the new spec.file

**How to run your test**
- Run **npm run cy:open**
- Choose and click on "yourTest.cy.js" inside Cypress window


//README file will be updated later if necessary