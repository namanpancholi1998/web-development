<!-- Introduction to Express 01 -->

1. Why should we use express?
   -> Web Framework. it make our work simple It provide utility to use we can use

2. Why Nodemon ?
   -> It will Re-Start our Server automatically when code update

3. Installing Express@4 (@3 will install 3 version)
   -> npm i express@4 It will install 4th version of express

4. Request parameters and queries
   -> we can use req.params to take value from url
   -> we can use req.query as well

5. Static Files
   -> app.use(express.static("public")); in this folder any file is accessible by browser

<!-- Response, Request, And Routers in Express 02-->

1. Handling Post and other request
   -> Get Request -> limit -> we have limit in this req. this request is using for read
   app.get("/", (req, res) => {
   res.send("Hello Get!");
   }); when we hit on www.google.com this is get req.
   like we hit localhost:3000

   -> Post Request -> this request is using for create

   -> Put Request -> this request is using for update

   -> Delete Request -> this request is using for delete

2. Chaining of request
   -> app.get().post().put().delete() like this

3. Serving HTML Files
   -> Serving files in Express is the process of making static files, such as HTML, CSS, images, and JavaScript, available to clients through an Express application. Express provides a built-in middleware function called express.static() that allows you to serve static files in your application.

4. Installing Postman
   -> https://www.postman.com/downloads/

5. Express Router
   -> The express. Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests. Multiple requests can be easily differentiated with the help of the Router() function in Express.

<!-- Middlewares in Express 03 -->

->> Middleware use for Logging Cookies isLoggedIn

Types of Middleware ->
-> 1. Application Level Middleware
-> 2. Router Level Middleware
-> 3. Error Handling Middleware
-> 4. Built-in Middleware
-> 5. Third-party Middleware

<!-- Exercise 15 - Clear the Clutter -->

You have to write a NodeJs Program to clear clutter inside of a directory and organize the contents of that directory inti different folders

for examples These files become:

1. name.jpg
2. name.png
3. this.pdf
4. naman.zip
5. arpit.zip
6. cat.jpg

this:
jpg/name.jpg, jpg/cat.jpg
png/name.png
zip/naman.zip, zip/arpit.zip
pdf/this.pdf

<!-- ejs Template Engine in Express 04 -->
