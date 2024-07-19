import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableYear1sem2Component } from './table-year1sem2.component';

describe('TableYear1sem2Component', () => {
  let component: TableYear1sem2Component;
  let fixture: ComponentFixture<TableYear1sem2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableYear1sem2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableYear1sem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
