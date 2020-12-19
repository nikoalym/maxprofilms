import { Injectable } from '@angular/core';
import { films } from './data/films';
import { Film } from './models/Film';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  films: Film[] = films;

  constructor() {
    console.log(this.getFilmById('xclpro'));
  }

  getFilmById(id:any): Film {
    const film = films.find((film) => film.id == id)
    return film as Film
  }

}
