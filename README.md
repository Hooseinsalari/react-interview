# React Interview
This Package is made for a simple task as an interview question for react.js.

## Server
First you have to start the server using the command
```
npm run server
```

It will load up an api server for you with the routes mentioned below:

```
GET http://localhost:5000/movies
```
with the response:
```json
[
   {
   "id": 1, //not null
   "title": "Quantum of Solace", //not null
   "year": 1981, //not null
   "rating": 5.8, //not null
   "director": "Alexa Baselli", //not null
   "genre": [ //nullable
         {
            "name": "Crime|Drama|Romance"
         },
         {
            "name": "Drama"
         },
         {
            "name": "Drama"
         },
         {
            "name": "War|Western"
         }
      ]
   },
]
```


```
GET http://localhost:5000/movies/[id]
```
The same object as get but not in an array

```
PUT http://localhost:5000/movies/[id]
```

which updates a certain movie.

## Your Task:
- [ ] Create an archive page showing the movies
- [ ] Create a route for each one when clicked should be directed to another page
- [ ] The page we enter must have a form with all the movie fields
- [ ] The User should be able to update a movie using the fields
