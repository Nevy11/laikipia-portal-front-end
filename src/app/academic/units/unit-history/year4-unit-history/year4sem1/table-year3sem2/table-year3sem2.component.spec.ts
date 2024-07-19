import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableYear3sem2Component } from './table-year3sem2.component';

describe('TableYear3sem2Component', () => {
  let component: TableYear3sem2Component;
  let fixture: ComponentFixture<TableYear3sem2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableYear3sem2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableYear3sem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
