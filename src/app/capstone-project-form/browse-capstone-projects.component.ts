import { Component, OnInit } from '@angular/core';
import { CapstoneService } from './capstone.service';
@Component({
  selector: 'app-browse-capstone-projects',
  templateUrl: './browse-capstone-projects.component.html',
  styleUrls: ['./browse-capstone-projects.component.css']
})
export class BrowseCapstoneProjectsComponent implements OnInit {
  public capstoneprojects;
  constructor(private _myService: CapstoneService) { }

  ngOnInit() {
    this.loadPage();
  }
  loadPage() {
    this._myService.getCapstoneProjects().subscribe(

      data => { this.capstoneprojects = data },
      () => console.log('finished loading')
    );

  }
}
