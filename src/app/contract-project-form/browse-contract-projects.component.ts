import { Component, OnInit } from '@angular/core';
import { ContractService } from './contract.service';
@Component({
  selector: 'app-browse-contract-projects',
  templateUrl: './browse-contract-projects.component.html',
  styleUrls: ['./browse-contract-projects.component.css']
})
export class BrowseContractProjectsComponent implements OnInit {
  public contractprojects;
  constructor(private _myService: ContractService) { }

  ngOnInit() {
    this.loadPage();
  }

  loadPage() {
    this._myService.getContractProjects().subscribe(

      data => { this.contractprojects = data },
      () => console.log('finished loading')
    );

  }

}
