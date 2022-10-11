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
