import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableYear3Sem1Component } from './table-year3-sem1.component';

describe('TableYear3Sem1Component', () => {
  let component: TableYear3Sem1Component;
  let fixture: ComponentFixture<TableYear3Sem1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableYear3Sem1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableYear3Sem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
