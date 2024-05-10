import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
    selector: 'my-app',
    templateUrl:'./app.component.html',	
    styleUrls:['./app.component.css'],
    providers: [HttpService]
})
export class AppComponent {    
    title: string;
    rating: string;  
    poster: string;
    year: string;
    released: string;
    runtime: string;
    genre: string;
    director: string;
    writer: string;
    actors: string;
    plot: string;
    language: string;
    country: string;
    awards: string;        
    inputTitle: string;
    doneInfo: boolean = true;
    doneBack: boolean = false;   
    
    constructor(private httpService: HttpService) { }   
                     
    Info() { 
        this.httpService.getData(this.inputTitle).subscribe(                          
            (data: any) => {                
        this.doneBack = true;
        this.doneInfo = false;
        this.title = data.Title;              
        this.rating = data.Ratings[0].Value;
        this.poster = data.Poster;
        this.year = data.Year;
        this.released = data.Released;
        this.runtime = data.Runtime;
        this.genre = data.Genre;
        this.director = data.Director;
        this.writer = data.Writer;
        this.actors = data.Actors;        
        this.plot = data.Plot;
        this.language = data.Language;
        this.country = data.Country;
        this.awards = data.Awards;
        });            
    } 
    Back(){
        this.doneBack = false;
        this.doneInfo = true;
    } 
}