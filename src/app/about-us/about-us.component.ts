import { Component } from '@angular/core';
import { TrainersComponent } from "../trainers/trainers.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [TrainersComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
