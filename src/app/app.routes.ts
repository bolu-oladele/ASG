import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';


// ToDo's:
 
// - Add/remove pages as needed
// - Delete comment

export const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: "full" },
  { path: 'admin', component: AdminComponent, data: { title: 'Admin | Anchor Sports Group' }},
  { path: 'home', component: HomeComponent, title: 'Anchor Sports Group | Where Faith Anchors Greatness | Sports Agency' },
  { path: 'about', component: AboutComponent, data: { title: 'About Us | Anchor Sports Group' }},
  { path: 'services', component: ServicesComponent, data: { title: 'Our Services | Anchor Sports Group' }},
  { path: 'contact', component: ContactComponent, title: 'Contact Us | Anchor Sports Group'},
  { path: 'signup', component: SignupComponent, title: 'Sign Up | Anchor Sports Group' },
  { path: 'login', component: LoginComponent, title: 'Login | Anchor Sports Group' },
  { path: '**', component: NotfoundComponent, title: 'Page Not Found | Anchor Sports Group' },

  //Site Stuff
  // { path: 'sitemap.xml', component: ContactComponent, title: 'Contact Us | RPF Europe' },
  // { path: 'robots.txt', component: ContactComponent, title: 'Contact Us | RPF Europe' },

];

