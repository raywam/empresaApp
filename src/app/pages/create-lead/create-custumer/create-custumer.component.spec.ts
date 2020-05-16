import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustumerComponent } from './create-custumer.component';

describe('CreateCustumerComponent', () => {
  let component: CreateCustumerComponent;
  let fixture: ComponentFixture<CreateCustumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCustumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCustumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
