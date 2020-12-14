import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Film } from '../models/Film';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.less'],
})
export class FilmDetailComponent implements OnInit {
  @Input() film: Film;
  constructor() {
    this.film = {
      title: '',
      features: [],
      variants: [],
      brand: '',
      description: '',
      vlts: [],
    };
  }

  ngOnInit(): void {}
}
