# Environment Refresh

## Purpose

This project is an early version of a real project. This project will be used to test candidates for a position at Turner with the TechOps team. This application is using .NET Core 2.0 and Angular 5.2. We expect a candidate to create a fork of this project and perform 2 tasks. Complete instructions are below.

    1. Complete a feature that allows a user to submit a request
    2. Add a features that you think will improve the program (dealer's choice)

## Prerequisites

This project is run through docker and it will ensure that all of the prequisites for building this project are available to you in the docker build image that is created. You will need to ensure that you have the latest version of Docker for your OS installed.

https://www.docker.com/community-edition#/download

Once you install Docker, you should enable the Shared Drives features. We use this features to mount the source directories from your computer into the docker image. This allows any changes in source code to be detected and the the app will automatically recompile and with HMR, your broweser will automatically refresh with the changes.

If you are using Windows, I recommend that you install the Docker Volume Watcher to work around a bug with Docker for Windows when it comes to watching file changes in a volume.

https://github.com/Angelinsky7/Docker-Volume-Watcher

## Getting Started

Fork this repository into your Github account and clone the repository to your computer.

From a command line, docker-compose can be used to build the image. There are two projects within the repository. There is a client project using Angular that will the front-end javascript and HTML. There is also a server project built with .NET Core that will serve data from REST api endpoints. For this example, an in-memory database is used and the data is pulled from some sample JSON files.

For development, the .NET project hosted on port 3000 and proxied via the angular cli development server on port 4200. In a production deployment, the .NET project can serve the static files or we will likely use Kubernetes to run each project as two seperate services and use an Ingress to make them both available to the user from the same DNS endpoint.

To start the development server, issue this command:

```
docker-compose up --build
```

When you see the message, 'environmentrefresh_1 | webpack: Compiled successfully.', the build is finished and you can view the resulting web app with this link. At this point, any changes you make in source code should cause the browser to refresh and show your changes.

[http://localhost:4200](http://localhost:4200)

You can use whatever code editor/IDE that you want. We have used Visual Studio Code.

# Instructions

You have two tasks. Please submit both of these tasks as two different pull requests.

The first task to to complete a feature to allow a user to submit a new request. The user should be presented a list of databases to restore and they can select an arbitrary set of databases. You should be able to figure out the data requirements from the Typescript structure in the client project. You should create a method in the server project to accept the request, but you don't have to worry about storing it any kind of database.

The second task is to add an additional feature of your own design that you think will improve the program. It can be something that improves how the program works from a technical aspect or a feature that you think the users will like or something else. It is your choice.

Be sure and push your pull request back to our repository and we will be alerted to your changes via GitHub.

# References

Some of the ideas for structuring this project come from these links.

[ASP.NET Core and Angular 2 Using CLI and Visual Studio Code](https://dzone.com/articles/aspnet-core-and-angular-2-using-cli-and-visual-stu)

[How to build an Angular Application with ASP.NET Core in Visual Studio 2017, visualized](https://medium.com/@levifuller/building-an-angular-application-with-asp-net-core-in-visual-studio-2017-visualized-f4b163830eaa)

[Create a web API with ASP.NET Core MVC and Visual Studio for Windows](https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api)
