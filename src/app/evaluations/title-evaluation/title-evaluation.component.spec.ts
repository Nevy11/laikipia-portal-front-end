import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleEvaluationComponent } from './title-evaluation.component';

describe('TitleEvaluationComponent', () => {
  let component: TitleEvaluationComponent;
  let fixture: ComponentFixture<TitleEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitleEvaluationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
