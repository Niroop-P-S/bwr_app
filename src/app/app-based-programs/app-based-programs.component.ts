import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { AppBannerComponent } from "../app-banner/app-banner.component";
import { MobFeaturesComponent } from "../mob-features/mob-features.component";

@Component({
  selector: 'app-app-based-programs',
  standalone: true,
  imports: [RouterModule, TestimonialsComponent, AppBannerComponent, MobFeaturesComponent],
  templateUrl: './app-based-programs.component.html',
  styleUrl: './app-based-programs.component.css'
})
export class AppBasedProgramsComponent {

}
