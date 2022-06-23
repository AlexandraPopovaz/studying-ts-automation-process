**Project**: studying-ts-automation-process

**Project setup**
- IDE
- Node.js
- TypeScript
- Cypress
- eslint + prettier + husky + lint-staged

**How to run the project**
- Cloned the repository from Github https://github.com/AlexandraPopovaz/studying-ts-automation-process.git
- Install dependencies: run **npm install cypress --save-dev**
- Open Cypress: run **npm run cy:open** 

**How to create a new test**
- Create a new branch: run **git checkout -b branch_name**
- Run **npm run cy:open**
- Create a new spec.file in the "e2e" folder
- Write "yourTest.cy.ts" test inside the new spec.file

**How to run your test**
- Run **npm run cy:open**
- Click on "yourTest.cy.js" inside Cypress window