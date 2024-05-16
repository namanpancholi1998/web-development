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
   ->

4. Installing Postman
   -> https://www.postman.com/downloads/

5. Express Router
   ->
