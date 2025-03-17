import { Component } from '@angular/core';
import { TestimonialsComponent } from "../testimonials/testimonials.component";

@Component({
  selector: 'app-personal-training',
  standalone: true,
  imports: [TestimonialsComponent],
  templateUrl: './personal-training.component.html',
  styleUrl: './personal-training.component.css'
})
export class PersonalTrainingComponent {

}
