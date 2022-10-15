# REST API - exercise - Movie API

In Movie API have 2 main objects: Movie and Actor

## Movie object

```
{
    title : string - The full name of the movie
    plot : string - A short plot description of the movie
    poster : string - A URL to the actor’s image
    budget : number - The movie’s budget in US dollars.
    revenue : number - The movie’s revenue up-to-date in US dollars.
    genres : string[] - An array of strings representing the movie’s genres (e.g. Comedy, Drama, etc.)
    popularity : number - A float from 0 to 10 representing the movie’s popularity.
    review - number - A float from 0 to 10 representing an average of the movie’s professional review.
    runtime - number - An integer of the movie’s runtime in minutes.
}
```

## Actor object

```
{
    name : string - The full name of the actor
    bio : string - A short biography of the actor
    image : string - A URL to the actor’s image.
    birthday : string - A string representation of the actor’s birthday.
    deathday : string - A string representation of the actor’s death date. If alive value will be null.
    gender : number - 1 for female, 2 for male.
    popularity : number - A float from 0 to 10 representing the actor’s popularity.
}
```

## Endpoints

### General Movie CRUD

Request:

```
GET http://api.movieapp.com/movies/Harry Potter and the Goblet of Fire HTTP/1.1
```

Response:

```
HTTP/1.1 200 OK

{
    "title" : "Harry Potter and the Goblet of Fire",
    "plot" : "During Harry's fourth year, Hogwarts plays host to the Triwizard Tournament. Three European schools participate in the tournament, with three 'champions' representing each school in the deadly tasks. The Goblet of Fire chooses Fleur Delacour, Viktor Krum, and Cedric Diggory to compete against each other. However, Harry's name is also produced from the Goblet thus making him a fourth champion, which leads to a terrifying encounter with a reborn Lord Voldemort.",
    "poster" : "https://www.amazon.com/Harry-Potter-Goblet-Daniel-Radcliffe/dp/B000GOVLNK",
    "budget" : 150000000,
    "revenue" : 896000000,
    "genres" : ["adventure","fantasy","detective"],
    "popularity" : 9.2,
    "review" : 10,
    "runtime" : 157,
}
```

Request:

```
POST http://api.movieapp.com/movies HTTP/1.1
{
    "title" : "Harry Potter and the Goblet of Fire",
    "plot" : "During Harry's fourth year, Hogwarts plays host to the Triwizard Tournament. Three European schools participate in the tournament, with three 'champions' representing each school in the deadly tasks. The Goblet of Fire chooses Fleur Delacour, Viktor Krum, and Cedric Diggory to compete against each other. However, Harry's name is also produced from the Goblet thus making him a fourth champion, which leads to a terrifying encounter with a reborn Lord Voldemort.",
    "poster" : "https://www.amazon.com/Harry-Potter-Goblet-Daniel-Radcliffe/dp/B000GOVLNK",
    "budget" : 150000000,
    "revenue" : 896000000,
    "genres" : ["adventure","fantasy","detective"],
    "popularity" : 9.2,
    "review" : 10,
    "runtime" : 157,
}
```

Response:

```
HTTP/1.1 201 Created
Location: /movies/Harry Potter and the Goblet of Fire
{
    "title" : "Harry Potter and the Goblet of Fire",
    "plot" : "During Harry's fourth year, Hogwarts plays host to the Triwizard Tournament. Three European schools participate in the tournament, with three 'champions' representing each school in the deadly tasks. The Goblet of Fire chooses Fleur Delacour, Viktor Krum, and Cedric Diggory to compete against each other. However, Harry's name is also produced from the Goblet thus making him a fourth champion, which leads to a terrifying encounter with a reborn Lord Voldemort.",
    "poster" : "https://www.amazon.com/Harry-Potter-Goblet-Daniel-Radcliffe/dp/B000GOVLNK",
    "budget" : 150000000,
    "revenue" : 896000000,
    "genres" : ["adventure","fantasy","detective"],
    "popularity" : 9.2,
    "review" : 10,
    "runtime" : 157,
}
```

Request:

```
PUT http://api.movieapp.com/movies/Harry Potter and the Goblet of Fire HTTP/1.1
{
    "title" : "Harry Potter and the Goblet of Fire",
    "plot" : "During Harry's fourth year, Hogwarts plays host to the Triwizard Tournament. Three European schools participate in the tournament, with three 'champions' representing each school in the deadly tasks. The Goblet of Fire chooses Fleur Delacour, Viktor Krum, and Cedric Diggory to compete against each other. However, Harry's name is also produced from the Goblet thus making him a fourth champion, which leads to a terrifying encounter with a reborn Lord Voldemort.",
    "poster" : "https://www.amazon.com/Harry-Potter-Goblet-Daniel-Radcliffe/dp/B000GOVLNK",
    "budget" : 150000000,
    "revenue" : 896000000,
    "genres" : ["adventure","fantasy","detective"],
    "popularity" : 9.2,
    "review" : 10,
    "runtime" : 180,
}
```

Response:

```
HTTP/1.1 200 OK
{
    "title" : "Harry Potter and the Goblet of Fire",
    "plot" : "During Harry's fourth year, Hogwarts plays host to the Triwizard Tournament. Three European schools participate in the tournament, with three 'champions' representing each school in the deadly tasks. The Goblet of Fire chooses Fleur Delacour, Viktor Krum, and Cedric Diggory to compete against each other. However, Harry's name is also produced from the Goblet thus making him a fourth champion, which leads to a terrifying encounter with a reborn Lord Voldemort.",
    "poster" : "https://www.amazon.com/Harry-Potter-Goblet-Daniel-Radcliffe/dp/B000GOVLNK",
    "budget" : 150000000,
    "revenue" : 896000000,
    "genres" : ["adventure","fantasy","detective"],
    "popularity" : 9.2,
    "review" : 10,
    "runtime" : 180,
}
```

Request:

```
DELETE http://api.movieapp.com/movies/Harry Potter and the Goblet of Fire HTTP/1.1

```

Response:

```
HTTP/1.1 204 No Content
```

### General Actor CRUD

Request:

```
GET http://api.movieapp.com/actors/Brad Pitt HTTP/1.1
```

Response:

```
HTTP/1.1 200 OK

{
    "name": "Brad Pitt",
    "bio": "William Bradley Pitt (born December 18, 1963) is…",
    "birthday": "1963-12-18",
    "deathday": null,
    "gender": 2,
    "popularity": 9.93
}
```

Request:

```
POST http://api.movieapp.com/actors HTTP/1.1
{
    "name": "Brad Pitt",
    "bio": "William Bradley Pitt (born December 18, 1963) is…",
    "birthday": "1963-12-18",
    "deathday": null,
    "gender": 2,
    "popularity": 9.93
}
```

Response:

```
HTTP/1.1 201 Created
Location: /actors/283
{
    "name": "Brad Pitt",
    "bio": "William Bradley Pitt (born December 18, 1963) is…",
    "birthday": "1963-12-18",
    "deathday": null,
    "gender": 2,
    "popularity": 9.93
}
```

Request:

```
PUT http://api.movieapp.com/actors/Brad Pitt HTTP/1.1
{
    "name": "Brad Pitt",
    "bio": "William Bradley Pitt (born December 18, 1963) is…",
    "birthday": "1963-12-18",
    "deathday": null,
    "gender": 2,
    "popularity": 10
}
```

Response:

```
HTTP/1.1 200 OK
{
    "name": "Brad Pitt",
    "bio": "William Bradley Pitt (born December 18, 1963) is…",
    "birthday": "1963-12-18",
    "deathday": null,
    "gender": 2,
    "popularity": 10
}
}
```

Request:

```
DELETE http://api.movieapp.com/actors/Brad Pitt HTTP/1.1

```

Response:

```
HTTP/1.1 204 No Content
```

### Get actors of a specific movie

```
GET http://api.movieapp.com/movies/Harry Potter and the Goblet of Fire/actors HTTP/1.1
```

### Add an actor to a specific movie

```
POST http://api.movieapp.com/movies/Harry Potter and the Goblet of Fire/actors HTTP/1.1
{
    "name": "Brad Pitt",
    "bio": "William Bradley Pitt (born December 18, 1963) is…",
    "birthday": "1963-12-18",
    "deathday": null,
    "gender": 2,
    "popularity": 9.93
}
```

### Remove an actor from a specific movie

```
DELETE http://api.movieapp.com/movies/actors/Brad Pitt HTTP/1.1
```
