import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSpecComponent } from './table-spec.component';

describe('TableSpecComponent', () => {
  let component: TableSpecComponent;
  let fixture: ComponentFixture<TableSpecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableSpecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
