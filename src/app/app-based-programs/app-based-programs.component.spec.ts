import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBasedProgramsComponent } from './app-based-programs.component';

describe('AppBasedProgramsComponent', () => {
  let component: AppBasedProgramsComponent;
  let fixture: ComponentFixture<AppBasedProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppBasedProgramsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppBasedProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
