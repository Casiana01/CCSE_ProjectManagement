import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseContractProjectsComponent } from './browse-contract-projects.component';

describe('BrowseContractProjectsComponent', () => {
  let component: BrowseContractProjectsComponent;
  let fixture: ComponentFixture<BrowseContractProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseContractProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseContractProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
