# api-rest of a messaging app

# project structure
- Configuration layer
1. server.js: A message (a request) arrives from the internet to the server (server.js), server.js is in charge of checking if the requests are correct to be able to enter them to the server, it is also who is in charge of configuring all the important information of the server, such as db, headers, etc
- Network layer
2. routes.js: server.js will communicate with the other modules through routes.js to manage the routes, routes.js receives the request, asks where it wants to go and calls the appropriate component
3. response.js
- Components Layer
4. Components:
    * message: It contains the endpoints of the messages, the actions we want to do, what is all the related logic, where it is stored, etc. It will contain:
        1) network.js, routes file, endpoints and all the information that has to do with http
        2) controller, all component logic (business logic)
        3) store, file in charge of managing the db
    * users:
        1) network
        2) controller
        3) store
