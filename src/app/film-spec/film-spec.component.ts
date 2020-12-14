import { Component, Input, OnInit } from '@angular/core';
import {FilmVariant}  from '../models/Film'
@Component({
  selector: 'app-film-spec',
  templateUrl: './film-spec.component.html',
  styleUrls: ['./film-spec.component.css']
})
export class FilmSpecComponent implements OnInit {
@Input() filmSpecs: FilmVariant[] = []
  constructor() {}

  ngOnInit(): void {
  }

}
