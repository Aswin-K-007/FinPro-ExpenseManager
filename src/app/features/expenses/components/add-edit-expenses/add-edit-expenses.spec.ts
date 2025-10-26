import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditExpenses } from './add-edit-expenses';

describe('AddEditExpenses', () => {
  let component: AddEditExpenses;
  let fixture: ComponentFixture<AddEditExpenses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditExpenses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditExpenses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
