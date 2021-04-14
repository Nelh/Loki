# Thor

## Simple Form with symfony, react and Bootstrap 5


![Optional Text](/assets/images/image-1.png)



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

```javascript
https://github.com/Nelh/Thor.git

```

- cd into the project

```javascript
cd Thor

```

- checks if you have composer install whith this commande

```javascript
composer --version
```

- if not install it, here is the link

```javascript
https://getcomposer.org/

- Install Composer on Linux and Mac OS X

sudo mv composer.phar /usr/local/bin/composer

```

- Run Composer

```javascript
composer install
```

- import the databse dump in your database server

- use the same credential(root, user, password, db_name) on the env file so that the project can have access to the database

```javascript
.env

DB_HOST=
DB_USERNAME=
DB_PASSWORD=
DB_NAME=

```
- Make sure you use the right database version, if you using mysql instead of mariadb change it in the .env and replace with your database version.

```javascript
// serverVersion=mariadb-10.4.18"

DATABASE_URL="mysql://$DB_USERNAME:$DB_PASSWORD@$DB_HOST/$DB_NAME?serverVersion=mariadb-10.4.18"

```


- you need a smtp server for the emails.

- For the purpose of this assessments i used mailtrap. (https://mailtrap.io/)[https://mailtrap.io/]

- You can create a free compte there

- In your mailtrap dashboard there is a option for Symfony, MAILER_DSN it will look similar to this

```javascript
MAILER_DSN=smtp://ebf420b9cbc41f:8a9545c9703b61@smtp.mailtrap.io:2525?encryption=tls&auth_mode=login
```

- Copy/paste into your env file

- By Now you should be set, don't hesitate to let me know if you need assistance.


if you don't have a local server on your local machine, don't worry you can still run the project with this commande it will create a server for this project usually on port :3000


```javascript

symfony server:start

[OK] Web server listening                                                      
      The Web server is using PHP FPM 7.4.3                                     
      http://127.0.0.1:8000      
```

- Add your project url to the .env, that will serve to redirect to the user form.

```javascript

// APP_LINK=http://127.0.0.1:...
APP_LINK=

```

- Additional params to add in the .env

```javascript
// EMAIL_TO=nelhamstrong9@gmail.com
EMAIL_TO=
```

## Project Maps

User creation > insertion to the database > Send Email to Administrator

Administrator > View / Edit / Update > User to database

![Optional Text](/assets/images/image-3.png)



#### Author
nelh Armstrong
