import { Component, Input, OnInit } from '@angular/core';
import { navLinks } from '../data/navLinks';
@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.less'],
})
export class SidenavListComponent implements OnInit {
  links = navLinks;
  constructor() {}

  ngOnInit(): void {}
}
