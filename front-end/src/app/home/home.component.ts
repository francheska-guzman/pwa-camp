import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public movies: Observable<any[]>;
  public posterUrl: string = 'https://image.tmdb.org/t/p/w160';
  
  constructor(private _moviesService: MoviesService) {
    this.movies = this._moviesService.movies;
  }

  ngOnInit() {
  }
}
