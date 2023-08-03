import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { Thumbnail2Component } from './components/thumbnail2/thumbnail2.component';
import { AdvocacyComponent } from './pages/advocacy/advocacy.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'advocacy', component: AdvocacyComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
