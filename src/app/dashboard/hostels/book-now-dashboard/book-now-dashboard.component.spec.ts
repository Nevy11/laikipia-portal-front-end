import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNowDashboardComponent } from './book-now-dashboard.component';

describe('BookNowDashboardComponent', () => {
  let component: BookNowDashboardComponent;
  let fixture: ComponentFixture<BookNowDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookNowDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookNowDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
