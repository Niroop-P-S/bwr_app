import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { ProgramsComponent } from './programs/programs.component';
import { ChooseUsComponent } from "./choose-us/choose-us.component";
import { TrainersComponent } from './trainers/trainers.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NavbarComponent,
    FooterComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bwr_app';
}
