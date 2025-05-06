import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobFeaturesComponent } from './mob-features.component';

describe('MobFeaturesComponent', () => {
  let component: MobFeaturesComponent;
  let fixture: ComponentFixture<MobFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobFeaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
