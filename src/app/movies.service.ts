import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Configuration } from './app.configuration';

@Injectable()
export class MoviesService {

    constructor(private _httpClient: HttpClient, private _configuration: Configuration) {
    }

    public getMovies(): Observable<Array<any>> {
        return this._httpClient.get<any>(`${this._configuration.basePath}/api/Movies`,
            {
                withCredentials: this._configuration.withCredentials,
            }
        );
    }

}
