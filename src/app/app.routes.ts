import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServicesComponent } from './services/services.component';
import { ServiceComponent } from './service/service.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';


// ToDo's:
 
// - Update company name
// - Add/remove pages as needed
// - Add SEO to titles as needed
// - Delete comment

export const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: "full" },
  { path: 'admin', component: AdminComponent, data: { title: 'Admin | Company Name' }},
  { path: 'home', component: HomeComponent, title: 'Website Name | Slogan' },
  { path: 'about', component: AboutComponent, data: { title: 'About Us | Company Name' }},
  { path: 'services', component: ServicesComponent, data: { title: 'Our Services | Company Name' }},
  { path: 'services/:service', component: ServiceComponent, data: { title: ' | Company Name' } },
  { path: 'contact', component: ContactComponent, title: 'Contact Us | Company Name'},
  { path: 'signup', component: SignupComponent, title: 'Sign Up | Company Name' },
  { path: 'login', component: LoginComponent, title: 'Login | Company Name' },
  { path: '**', component: NotfoundComponent, title: 'Page Not Found | Company Name' },

  //Site Stuff
  // { path: 'sitemap.xml', component: ContactComponent, title: 'Contact Us | RPF Europe' },
  // { path: 'robots.txt', component: ContactComponent, title: 'Contact Us | RPF Europe' },

];

