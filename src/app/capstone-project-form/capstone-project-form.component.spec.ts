import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapstoneProjectFormComponent } from './capstone-project-form.component';

describe('CapstoneProjectFormComponent', () => {
  let component: CapstoneProjectFormComponent;
  let fixture: ComponentFixture<CapstoneProjectFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapstoneProjectFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapstoneProjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
