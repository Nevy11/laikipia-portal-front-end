import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableYear2Sem2Component } from './table-year2-sem2.component';

describe('TableYear2Sem2Component', () => {
  let component: TableYear2Sem2Component;
  let fixture: ComponentFixture<TableYear2Sem2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableYear2Sem2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableYear2Sem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
