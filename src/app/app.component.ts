import { Component, OnInit, OnDestroy } from '@angular/core';

import * as _ from 'underscore';

import { MoviesService } from './movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public actors: Array<any> = [];

  constructor(private _movieService: MoviesService) {
  }

  ngOnInit(): void {
    this._movieService.getMovies()
      .subscribe(movies => {
        const groupedInfo = _.chain(movies).sortBy('movie').groupBy('actor').value();
        console.log(groupedInfo);
        this.actors = Object.keys(groupedInfo).map(function(key) {
          return {actor: key || 'No Actor Name', roles: groupedInfo[key]};
        });
      });
  }
}
