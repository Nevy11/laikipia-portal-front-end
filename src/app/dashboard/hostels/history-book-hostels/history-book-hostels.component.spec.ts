import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryBookHostelsComponent } from './history-book-hostels.component';

describe('HistoryBookHostelsComponent', () => {
  let component: HistoryBookHostelsComponent;
  let fixture: ComponentFixture<HistoryBookHostelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoryBookHostelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryBookHostelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
