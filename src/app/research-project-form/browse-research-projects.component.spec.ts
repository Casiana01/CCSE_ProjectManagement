import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseResearchProjectsComponent } from './browse-research-projects.component';

describe('BrowseResearchProjectsComponent', () => {
  let component: BrowseResearchProjectsComponent;
  let fixture: ComponentFixture<BrowseResearchProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseResearchProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseResearchProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
