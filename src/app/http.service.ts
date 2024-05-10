import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) { }
    private url = "https://www.omdbapi.com/?i=tt3896198&apikey=2b094ae1&t=";
    getData(inputTitle: string) {
        return this.http.get(this.url + inputTitle);
    }
}