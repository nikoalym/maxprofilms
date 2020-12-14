import { Injectable } from '@angular/core';
import {films} from './data/films'
import  {Film}  from './models/Film';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  films : Film[] = films

  constructor() {
    console.log(films)
   }

  getFilms(){
    return films
  }
}
