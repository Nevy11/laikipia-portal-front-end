import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableYear2Sem1Component } from './table-year2-sem1.component';

describe('TableYear2Sem1Component', () => {
  let component: TableYear2Sem1Component;
  let fixture: ComponentFixture<TableYear2Sem1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableYear2Sem1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableYear2Sem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
