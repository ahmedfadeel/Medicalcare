# Medicalcare

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.

##Prerequisites

You need git to clone the seed-angular repository.

You will need Node.js and npm.

## Clone Medicalcare

Clone the seed-angular repository using git:

[git clone](https://github.com/ahmedfadeel/Medicalcare.git)
`cd seed-angular`
If you just want to start a new project without the seed-angular commit history then you can do.

## Install Dependencies

To install the dependencies you must run:
Run  `npm install`.
## project  functionality 
**The general page breakdown looks like this:**

- Home patient page
    - personal information  about    current logged in patient name , image ,address 
    - List of patient diogneses and medical advices  of current logged in patient 
-patient info  page 
    -update all patient  personal in formation 
    -only patient has access right to do   
-search patient  page 
    -serch patient by department or name or id 
        
- Home doctor page
    - personal information  about    current logged in doctor name ,doctor experience   ,image and address 
    - List of doctor  articles  and medical advices 
-doctor has access to  patient profile when he has the patient ID  
    -doctor can add diognes or medicalAdvice or treatment to this patient   
    - doctor has access right to show all patient mediacl history       
-doctor info  page 
    -update all doctor  personal information 
    -only doctor has access right to do   
-search doctor  page 
    -serch patient by department or name or id.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. se the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
