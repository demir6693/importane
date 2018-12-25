import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProizvodiComponent } from './proizvodi/proizvodi.component';
import { ArtikliComponent } from './artikli/artikli.component';
import { ProizvodiDetailsComponent } from './proizvodi-details/proizvodi-details.component';


const appRoutes: Routes = [

  { path: 'home', component: HomeComponent },

  { path: 'proizvodi', component: ProizvodiComponent },

  { path: 'proizvodi/:name', component: ArtikliComponent },

  { path:'', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProizvodiComponent,
    ArtikliComponent,
    ProizvodiDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
