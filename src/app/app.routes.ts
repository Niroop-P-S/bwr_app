import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OneOneCoachComponent } from './one-one-coach/one-one-coach.component';
import { PersonalTrainingComponent } from './personal-training/personal-training.component';
import { OnlineProgramsComponent } from './online-programs/online-programs.component';
import { DietNutritionComponent } from './diet-nutrition/diet-nutrition.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BlogsComponent } from './blogs/blogs.component';
import { PostsComponent } from './posts/posts.component';
import { CategoryPostsComponent } from './category-posts/category-posts.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'about-us', component: AboutUsComponent},
    { path: '1-1_coaching', component: OneOneCoachComponent},
    { path: 'personal-training', component: PersonalTrainingComponent},
    { path: 'online-programs', component: OnlineProgramsComponent},
    { path: 'diet-nitrition', component: DietNutritionComponent},
    { path: 'contact-us', component: ContactUsComponent},
    { path: 'blogs', component: BlogsComponent},
    { path: 'post/:id', component: PostsComponent},
    { path: 'category-posts/:id', component: CategoryPostsComponent}

];
