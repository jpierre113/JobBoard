# JobStack

This application is a Job Board site where a job posting can be created, edited and deleted. 
View the live project here: http://jobstacks.s3-website-us-east-1.amazonaws.com/

- Backend: Java Springboot and Postgres. Springboot was used to establish my model(the object for my project), the repository, controller(the endpoints/paths for my application) and security(to bypass CORS issue with connect my frontend to the backend). Postgres is the database environment used to create my table and columns for the data. 

- Frontend: React JS 

I started my project by creating the ER Diagrams and wireframes first. I like to have an idea on what I want my application to contain. I then work on the backend first making sure it can connect to the database and create the tables. Then I test my endpoints are working by using Postman. Once I've completed the backend, I work on the frontend. I prefer working on the frontend after the backend because in my case I used fetch calls the would rely on the endpoints I created. I focus on the functionalities I want to accomplish which were create job, edit job and delete job. Lastly, added in styling.

My Database Schema:
![Imgur](https://i.imgur.com/KFZ5k54.png)


My wireframe for my frontend will have the fields which they can put in information and the job will be posted on the Job Board.
![Imgur](https://i.imgur.com/bH2WxNU.jpg)


User Stories:

- As an Admin, I want to post jobs available at the company so I can connect with possible candidates

- As a Guest, I want to view job postings so I can send an application to the company.

Hurdles I experience:

- Build Failure with the Microservice, to resolve this I made updates to my application properties

- Failure to convert String to a Long in my fetch call, the resolution to that is to use the variable jobId instead of the same path I had in my controller

- Conflict with the Job Creation Form. I had the Job Creation Form on a separate page from the Job Listing. The issue I had was that the values I inputted the form returned null values as I logged my responses into the console to troubleshoot. As a resolution I had to have the Job Creation form on the same page as the Job Listing due to the fact all the functionality were on that page. I researched that it is possible to pass the functionality to a different page, but I'll keep in mind for future projects.





