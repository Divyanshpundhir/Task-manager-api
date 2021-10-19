<h1>Task Manager REST API</h1>
This is a full featured Task Management REST API back-end built with Node.js and MongoDB. Features include:
<ul>
  <li> Full CRUD features for User and Task instances. </li>
  <li> Pagination and filtering of server responses to avoid slow page load times. </li>
  <li> Hash encryption of passwords and access management with JWT tokens.</li>
  <li> Restricted user access to CRUD operations using middleware based on JWT tokens. </li>
</ul>

## What I Used:
<ul>
<li> Express(for Restful API and managing routers). </li>
<li> Mongoose(NoSql database). </li>
<li>Validations.</li>
<li>Async-Await (for waitting until the process is done!).</li>
<li>JWT(for authenticating users).</li>
<li>multer(image uploading). </li>
<li>sharp(croping and image formatter). </li>
<li>SendGrid API (for sending emails).</li>
<li>heroku (deployment). </li>
</ul>

## API Endpoints 

| Methods | Endpoints                          | Access  | Description                              |
| ------- | ---------------------------------- | ------- | ---------------------------------------- |
| POST    | /users                             | Public  | Sign up                                  |
| POST    | /users/login                       | Public  | Login                                    |
| GET     | /users/me                          | Private | User's Profile                           |
| PATCH   | /users/me                          | Private | Update Profile                           |
| POST    | /users/me/avatar                   | Private | Upload Profile Picture                   |
| GET     | /users/userID/avatar              | Private | View Profile Picture                     |
| DELETE  | /users/me/avatar                   | Private | Delete Profile Picture                   |
| DELETE  | /users/me                          | Private | Delete Account                           |
| POST    | /users/tasks                       | Private | Create a Task                            |
| GET     | /users/tasks/taskID                | Private | View a Task                              |
| GET     | /users/tasks                       | Private | View all Tasks                           |
| GET     | /users/tasks?limit=2               | Private | Limit the result to 2                    |
| GET     | /users/tasks?sortBy=createdAt:desc | Private | Sort by Descending order of created date |
| GET     | /users/tasks?sortBy=createdAt:asc  | Private | Sort by Ascending order of created date  |
| GET     | /users/tasks?skip=3                | Private | Paginating result                        |
| PATCH   | /users/tasks/taskID                | Private | Update a Task                            |
| DELETE  | /users/tasks/taskID                | Private | Delete a Task                            |
| POST    | /users/logout                      | Private | Logout an account                        |
| POST    | /users/logoutall                   | Private | Logout all accounts                      |

## Hosted Domain Link

[Task Manager API](https://github.com/Divyanshpundhir/Task-manager-api)

## Setup Instructions

To use this code you will require an account with [SendGrid](https://signup.sendgrid.com/).  Sign-up is free and no credit card is required to access a free-tier API Key.

Node.js version 12+ and npm must be installed on your machine.  In terminal type the following commands:
```
git clone https://github.com/Divyanshpundhir/Task-manager-api
cd task-manger-api
npm install
mkdir config
cd config
touch dev.env
vim dev.env
```

Insert the following lines in `dev.env`, replacing all `<content>` with your own information:

```
PORT=<port number>
MONGODB_URL=<mongodb connection string>
SENDGRID_API_KEY=<api key>
JWT_SECRET=<unique key of your choice to generate JSON web tokens>
```
To run the web server return to the root of the repository and type:
```
npm run dev
```

## Security Vulnerabilities

If you discover a security vulnerability within the project, please create an issue. All security vulnerabilities will be promptly addressed and appreciated.
