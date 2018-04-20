<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

* Middleware consists of function(s) that make changes to the request and response objects.
* Sessions are ways to persist data across requests. Session data can be stored in memory, cookies, memory cache, or a database.
* bcrypt is a password hashing function.
* JSON Web Tokens are data stored client-side upon authentication, e.g. when a user signs in. The server references this data each time the user requests access to protected resources. Time interval of authentication status upon sign-in is configurable, i.e. limited time signed in.

2.  What does bcrypt do in order to prevent attacks?

* With bcrypt, the user has the ability to alter the number of rounds that bcrypt goes through to hash data. Specifically, brcrypt goes through 2^rounds iterations of hashing, with 'rounds' being a number the user specifies.

3.  What are the three parts of the JSON Web Token?

* header
* payload
* signature
