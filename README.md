# Thor

## Simple Form with symfony, react and Bootstrap 5

## video project 

(https://youtu.be/vCvenEqqGhY)[https://youtu.be/vCvenEqqGhY]


![Optional Text](/assets/images/image-1.png)

## Description

I created this small Project using React and Symfony. it utilize a small Api that process the data on the server. 
In the Frontend i use bootstrap 5 to speed up my development process and not focusing my attention on thedetails first but rather the logic. I also integrated sass and webpack  to compile and bundle my styling even though i didn't use it.
That allowed me to maximise the time that i had to focus on the logic and the validation. 

I used react to create a simple SPA that will handle to creating and updating of the user and the same page used the state to control the flow of my data within the App. 

I also set the validation rules on the frontend so that in case the user forget to fill in a form the data don't get process to the server.

In case the first layer failed, i've added another validation as required in the assessment briefing, so that we are sure the data that we are processing is valid.

when the user registered and pass all the validation requirement, an email get send to the administrator, (ref to installation below) and the admin can click the link and get redirected to the website.

When i sent the email, i'm just sending the id attached to the url, and on to the application my url has an optional parameter is used to check if the user is valid and i'm returning the data as a json so that it can be processed on the frontend.


## Requirement
- web server
- database server
- smtp server

## Includes
- Database dumps `thor.sql`
- env file

## Installation

- You first need a server to run this app

- clone or download the repository in you local server or anywhere in your local systems.

```
https://github.com/Nelh/Thor.git

```

- cd into the project

```
cd Thor

```

- checks if you have composer install whith this commande

```
composer --version
```

- if not install it, here is the link

```
https://getcomposer.org/
```

- Run Composer

```
composer install
```

- import the databse dump in your database server

- use the same credential(root, user, password, db_name) on the env file so that the project can have access to the database

```
.env

DB_HOST=
DB_USERNAME=
DB_PASSWORD=
DB_NAME=

```
- make sure your db_name have the right verison

- you need a smtp server for the emails.

- For the purpose of this assessments i used mailtrap. (https://mailtrap.io/)[https://mailtrap.io/]

- You can create a free compte there

- In your mailtrap dashboard there is a option for Symfony, MAILER_DSN it will look similar to this

```
MAILER_DSN=smtp://ebf420b9cbc41f:8a9545c9703b61@smtp.mailtrap.io:2525?encryption=tls&auth_mode=login
```

- copy and paste into your env file

- By Now you should be set, don't hesitate to let me know if you need assistance.


if you don't have a local server on your local machine, don't worry you can still run the project with this commande it will create a server for this project usually on port :3000

```
symfony server:start

[OK] Web server listening on http://127.0.0.1:....
  ...
```

- Add your project url to the .env, that will serve to redirect to the user form.

```
APP_LINK=

ie // APP_LINK=http://127.0.0.1:...
```

- Additional params to add in the .env

```
EMAIL_TO=
```

## Project Maps

User creation > insertion to the database > Send Email to Administrator

Administrator > View / Edit / Update > User to database

![Optional Text](/assets/images/image-3.png)



#### Author
nelh Armstrong