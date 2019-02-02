### STUDENTS

| Verb           | Route                | Description     
| -------------- | ----------------     | --------------------
| GET            | /student/home        | Show student profile
| GET            | /student/edit        | Show student profile edit page
| POST           | /student             | Edit student profile
| GET            | /student/register    | Show student register page
| POST           | /student/register    | register user
| GET            | /student/login       | Show student login page
| POST           | /student/login       | login user
| GET            | /student/logout      | logout user

### INVESTORS 

| Verb           | Route                | Description     
| -------------- | ----------------     | --------------------
| GET            | /investor/home       | Show investor profile
| GET            | /investor/edit       | Show investor profile edit page
| POST           | /investor            | Edit investor profile

### FUNDRAISER

| Verb           | Route                | Description 
| -------------- | -------------------- | --------------------
| GET            | /fundraiser/new      | Show form for new fundraiser
| GET            | /fundraiser/show     | Show fund
| POST           | /fundraiser/new      | Create a new fund
| PUT            | /fundraiser/:id      | Find and update a fund
| DELETE         | /fundraiser/:id      | Find and delete a fund