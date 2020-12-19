import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shade-comparison',
  templateUrl: './shade-comparison.component.html',
  styleUrls: ['./shade-comparison.component.css'],
})
export class ShadeComparisonComponent implements OnInit {
  @Input() shades: string[] = [];
  rgba  = (percentage: string) => `rgba(0, 0, 0,${percentage})`
  constructor() {}

  ngOnInit(): void {}


}
