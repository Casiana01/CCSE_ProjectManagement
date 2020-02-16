import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractProjectFormComponent } from './contract-project-form.component';

describe('ContractProjectFormComponent', () => {
  let component: ContractProjectFormComponent;
  let fixture: ComponentFixture<ContractProjectFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractProjectFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractProjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
