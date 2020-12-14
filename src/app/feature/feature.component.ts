import { Component, Input, OnInit } from '@angular/core';
import { Feature } from '../models/Film';



@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  @Input() feature?: Feature;

  constructor() {
   
   }

  ngOnInit(): void {
  }

}
