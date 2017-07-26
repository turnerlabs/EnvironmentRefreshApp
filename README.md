# Environment Refresh

## Purpose
This project is an early version of a real project.  This project will be used to test candidates for a position at Turner with the TechOps team.  This application is using .NET Core 1.1 and Angular 4.2.  We expect a candidate to create a fork of this project and perform 2 tasks.  Complete instructions are below.

    1. Complete a feature that allows a user to submit a request
    2. Add a features that you think will improve the program (dealer's choice)

## Prerequisites
You should install the matching version of the .Net Core SDK.  You should also install NodeJs.  Then install these packages via npm.

```
npm install -g npm node-gyp concurrently rimraf typescript windows-build-tools @angular/cli
```
You can omit windows-build-tools is you are building this on a Linux based system.

## Getting Started
First, install the necessary npm and dotnet packages with this command from the directoy you used to clone this project.
```
npm install
```
Next, you will start the local web server and view the resulting web app to make sure everything is working correctly.  But that requires a little bit of an explanation.

This project uses both .NET Core and Angular.  Each of those project build systems has it's own local server for serving content in a development environment.  The structure of this project uses both at the same time.  The Angular project will use the proxy feature to serve any http requests with the /api path by proxying the dotnet server (which is using port 5000) over the angular local server (using port 4200).

Run the following commands to start both servers.
```
npm start
```
Once the angular build is complete (webpack: Compiled successfully), you can view the resulting web app with this link.

[http://localhost:4200](http://localhost:4200)

# References
Some of the ideas for structuring this project come from these links.

[ASP.NET Core and Angular 2 Using CLI and Visual Studio Code](https://dzone.com/articles/aspnet-core-and-angular-2-using-cli-and-visual-stu)

[How to build an Angular Application with ASP.NET Core in Visual Studio 2017, visualized](https://medium.com/@levifuller/building-an-angular-application-with-asp-net-core-in-visual-studio-2017-visualized-f4b163830eaa)

[Create a web API with ASP.NET Core MVC and Visual Studio for Windows](https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api)