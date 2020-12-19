import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Film } from '../models/Film';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.less'],
})
export class FilmDetailComponent implements OnInit {
  film: Film = {
    title: '',
    id: '',
    features: [],
    variants: [],
    brand: '',
    description: '',
    vlts: [],
  };
  constructor(private route: ActivatedRoute, private service: AppService) {
    this.route.params.subscribe((val) => {
      const id = val.id;
      this.film = this.service.getFilmById(id);
    });
  }

  ngOnInit(): void {}
}
