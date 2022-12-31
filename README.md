# Vbank
Bank Management System

This project is about a bank (focused in get brazilian data like "CPF" and "CEP").

In this workflow I tried to put my all learning efforts to make a project proposed by @carvalhonicollas at nc-sti team.

I tried to use as many concepts as I could like HTML, CSS and JavaScript.

All project was made to get and store data purely in JavaScript in this moment.
While the sistem is up and running the data are gathered and stored in classes and arrays.

For testing, open index.html and proceed to login at "Entrar". Manager: "Gerente" and User: "Usuário".
The frontend is in portuguese, but if you look out at code and inspect it, will be easy to identify the terms: Manager, User, Login, etc.

This project use so much injections from JavaScript in HTML DOM. So if you plan to use at some sensitive data I recommend to do some sanitation and move some functions to inside authentication mecanisms.

Talking about authentication, I made a custom cypher based in AES JS. Use Encrypt() and Decrypt() to encode and decode sensitive data like logins and passwords. Beware that is just for educational purpose. Passwords usually are secured by hashing algos like SHA256. Be free to alter the key in Cypher to customize your encryption method.

To store data was used classes, arrays, get and set methods for put all these data in arrays and these arrays in classes.

Now let's move on to how to test and enter in system:

/******Manager demo login******/

user: 

gerentevbank

password: 

senhademo

/*******User demo login*******/

user(email): 

demo1@demo.com
demo2@demo.com
.
.
.
demo9@demo.com

password: 123456


If you have some regard and inprovement, give a comment or report an issue!
