import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseCapstoneProjectsComponent } from './browse-capstone-projects.component';

describe('BrowseCapstoneProjectsComponent', () => {
  let component: BrowseCapstoneProjectsComponent;
  let fixture: ComponentFixture<BrowseCapstoneProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseCapstoneProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseCapstoneProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
