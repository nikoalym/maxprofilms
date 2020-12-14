import { Component } from '@angular/core';
import { AppService } from './app.service';
import {Film} from './models/Film';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  films: Film[];
  selectedFilm : Film;
  constructor(private service: AppService) {
    this.films = service.getFilms();
    this.selectedFilm = this.films[0]
  }
}
