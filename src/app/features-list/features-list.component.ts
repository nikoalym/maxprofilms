import { Component, Input, OnInit } from '@angular/core';
import { Feature } from '../models/Film';

@Component({
  selector: 'app-features-list',
  templateUrl: './features-list.component.html',
  styleUrls: ['./features-list.component.css']
})
export class FeaturesListComponent implements OnInit {
  @Input() features: Feature[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
