import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public pageTitle = 'CCSE Project Management System';
  author = "G. bajaj, E. Gladstone, N. Talole and Casiana mba"
  constructor() { }

  ngOnInit() {
  }

}
