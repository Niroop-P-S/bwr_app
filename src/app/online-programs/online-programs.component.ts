import { Component } from '@angular/core';
import { TestimonialsComponent } from '../testimonials/testimonials.component';

@Component({
  selector: 'app-online-programs',
  standalone: true,
  imports: [TestimonialsComponent],
  templateUrl: './online-programs.component.html',
  styleUrl: './online-programs.component.css'
})
export class OnlineProgramsComponent {

}
