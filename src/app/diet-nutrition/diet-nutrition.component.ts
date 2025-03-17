import { Component } from '@angular/core';
import { TestimonialsComponent } from "../testimonials/testimonials.component";

@Component({
  selector: 'app-diet-nutrition',
  standalone: true,
  imports: [TestimonialsComponent],
  templateUrl: './diet-nutrition.component.html',
  styleUrl: './diet-nutrition.component.css'
})
export class DietNutritionComponent {

}
