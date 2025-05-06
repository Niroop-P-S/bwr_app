import { Component } from '@angular/core';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { RouterModule } from '@angular/router';
import { AppBannerComponent } from "../app-banner/app-banner.component";

@Component({
  selector: 'app-online-programs',
  standalone: true,
  imports: [TestimonialsComponent, RouterModule, AppBannerComponent],
  templateUrl: './online-programs.component.html',
  styleUrl: './online-programs.component.css'
})
export class OnlineProgramsComponent {

}
