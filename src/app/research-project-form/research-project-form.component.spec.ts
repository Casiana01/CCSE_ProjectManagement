import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchProjectFormComponent } from './research-project-form.component';

describe('ResearchProjectFormComponent', () => {
  let component: ResearchProjectFormComponent;
  let fixture: ComponentFixture<ResearchProjectFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchProjectFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchProjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
