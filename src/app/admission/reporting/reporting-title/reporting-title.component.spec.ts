import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingTitleComponent } from './reporting-title.component';

describe('ReportingTitleComponent', () => {
  let component: ReportingTitleComponent;
  let fixture: ComponentFixture<ReportingTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportingTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportingTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
