import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule, MatIconModule, MatCardModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import 'bootstrap/dist/js/bootstrap.bundle';
import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CapstoneProjectFormComponent } from './capstone-project-form/capstone-project-form.component';
import { ResearchProjectFormComponent } from './research-project-form/research-project-form.component';
import { ContractProjectFormComponent } from './contract-project-form/contract-project-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule, MatSelectModule, MatButtonModule, MatTabsModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { HomePageComponent } from './home-page/home-page.component';
import { Routes, RouterModule } from '@angular/router';
import { CapstoneService } from './capstone-project-form/capstone.service';
import { ContractService } from './contract-project-form/contract.service';
import { BrowseContractProjectsComponent } from './contract-project-form/browse-contract-projects.component';
import { BrowseResearchProjectsComponent } from './research-project-form/browse-research-projects.component';
import { BrowseCapstoneProjectsComponent } from './capstone-project-form/browse-capstone-projects.component';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

const appRoutes: Routes = [{
  path: '',                     //default component to display
  component: HomePageComponent
}, {
  path: 'addCapstoneProject',         //when Capstone Project is added 
  component: CapstoneProjectFormComponent
}, {
  path: 'addContractForHire',         //when contract to hire is added 
  component: ContractProjectFormComponent
}, {
  path: 'addResearchProject',       //when research Project is added
  component: ResearchProjectFormComponent
}, {
  path: 'home', component: HomePageComponent
}, {
  path: 'browseCapstoneProjects', component: BrowseCapstoneProjectsComponent
}, {
  path: 'browseResearchProjects', component: BrowseResearchProjectsComponent
}, {
  path: 'browseContractProjects', component: BrowseContractProjectsComponent
}];


@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    CapstoneProjectFormComponent,
    ResearchProjectFormComponent,
    ContractProjectFormComponent,
    HomePageComponent,
    BrowseCapstoneProjectsComponent,
    BrowseContractProjectsComponent,
    BrowseResearchProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    MatTabsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [

    CapstoneService, ContractService],
  bootstrap: [AppComponent]
})
export class AppModule { }
