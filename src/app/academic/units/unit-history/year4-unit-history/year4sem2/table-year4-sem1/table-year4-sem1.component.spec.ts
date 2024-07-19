import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableYear4Sem1Component } from './table-year4-sem1.component';

describe('TableYear4Sem1Component', () => {
  let component: TableYear4Sem1Component;
  let fixture: ComponentFixture<TableYear4Sem1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableYear4Sem1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableYear4Sem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
