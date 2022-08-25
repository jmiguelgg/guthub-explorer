# GitHub Topic Explorer

This repo contains a web application that display all topics related to React into GutHub data. Using the same technologie to build the application and requesting the info using Appollo client.

## How to run the application
First of all you need to have installed on your machine [NodeJs](https://nodejs.org/en/) and also, this instalation should have NPM that is a repository manager to download all dependencies needed. If you are more confortable using [Yarn](https://yarnpkg.com/getting-started/install) you can used it.

The next steep is to set up your `.env` file variables. You need to create a file named .env with the same variable names into `.env.example` and fill those variables with the corresponding inforimation. Once you have been configure your variables, you can run the next commnads to run your application.

This comand is used to install all dependencies needed:
````
  npm install
````

The next comand is used to run the project once the dependencies has been isntalled
````
  npm start
````

At this point you should be able to watch the project running at this [http://localhost:3000](http://localhost:3000), this should not have any problem to run, only if you are ussing the same port 3000 on another application running.

## Run Unit Test
You can run the unit test files to prove if the components works as expected with the next command.
````
  npm run test
````

## Future Improvements
On this project we can improve some things and it will also depends on how much scalable could be the project and the way I handle something.

### Structure
The separation of components can be better if the project grows, because we can separate the atomic components and the components that used them, and aldo the styles related can be move for general styles and custome into each reusable component.

### Styles
We can implements a them and handle the general styles with that, in the specific cases we cna declare the styles inside of the componnet if the styles were small or in separated files for a long kind of styles.

### Request API
Using the different status (loading, error and data) to handle the request is ok, but if we need more validations or preproccess the response, we can move the logic for a custom hoock to manage the bissness logic there and clean up the component handle.