import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingTableComponent } from './reporting-table.component';

describe('ReportingTableComponent', () => {
  let component: ReportingTableComponent;
  let fixture: ComponentFixture<ReportingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportingTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
