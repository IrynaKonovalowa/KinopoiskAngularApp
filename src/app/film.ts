export class Film {
    title: string;
    rating: string;  
    poster: string;
    year: string;
    released: string;
    runtime: string;
    genre: string;
    director: string;
    writer: string;  
    actors:string;
    plot: string;
    language: string;
    country: string;
    awards: string;

    constructor(title: string, rating: string, poster: string, year: string, released: string, runtime: string,
        genre: string, director: string, writer: string, actors: string, plot: string, language: string, country: string, awards: string) {

        this.title = title;       
        this.rating = rating;
        this.poster = poster;
        this.year = year;
        this.released = released;
        this.runtime = runtime;
        this.genre = genre;
        this.director = director;
        this.writer = writer;
        this.actors = actors;
        this.plot = plot;
        this.language = language;
        this.country = country;
        this.awards = awards;
    }
}