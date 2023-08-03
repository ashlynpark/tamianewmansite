import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderimgComponent } from './components/headerimg/headerimg.component';
import { HomeComponent } from './pages/home/home.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { Thumbnail2Component } from './components/thumbnail2/thumbnail2.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavbarComponent,
    HeaderimgComponent,
    HomeComponent,
    ThumbnailComponent,
    Thumbnail2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
