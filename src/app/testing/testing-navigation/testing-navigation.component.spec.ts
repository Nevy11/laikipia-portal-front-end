import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingNavigationComponent } from './testing-navigation.component';

describe('TestingNavigationComponent', () => {
  let component: TestingNavigationComponent;
  let fixture: ComponentFixture<TestingNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestingNavigationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestingNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
