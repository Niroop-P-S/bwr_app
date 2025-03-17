import { Component } from '@angular/core';
import { TestimonialsComponent } from '../testimonials/testimonials.component';

@Component({
  selector: 'app-one-one-coach',
  standalone: true,
  imports: [TestimonialsComponent],
  templateUrl: './one-one-coach.component.html',
  styleUrl: './one-one-coach.component.css'
})
export class OneOneCoachComponent {

}
