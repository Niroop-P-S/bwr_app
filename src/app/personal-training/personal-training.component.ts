import { Component } from '@angular/core';
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { RouterModule } from '@angular/router';
import { MobFeaturesComponent } from "../mob-features/mob-features.component";
import { AppBannerComponent } from "../app-banner/app-banner.component";

@Component({
  selector: 'app-personal-training',
  standalone: true,
  imports: [TestimonialsComponent, RouterModule, MobFeaturesComponent, AppBannerComponent],
  templateUrl: './personal-training.component.html',
  styleUrl: './personal-training.component.css'
})
export class PersonalTrainingComponent {

}
