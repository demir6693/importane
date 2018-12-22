import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductsComponent } from './products/products.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { System88Component } from './system88/system88.component';
import { System76Component } from './system76/system76.component';
import { System70Component } from './system70/system70.component';
import { KlizniComponent } from './klizni/klizni.component';
import { KlizniKComponent } from './klizni-k/klizni-k.component';
import { KlizniPodiznoComponent } from './klizni-podizno/klizni-podizno.component';
import { KlizniKombiComponent } from './klizni-kombi/klizni-kombi.component';
import { AluProfiliComponent } from './alu-profili/alu-profili.component';
import { Alu965Component } from './alu965/alu965.component';
import { Alu11000Component } from './alu11000/alu11000.component';
import { FasadaStakloComponent } from './fasada-staklo/fasada-staklo.component';
import { FasadaStakloStrukturalneComponent } from './fasada-staklo-strukturalne/fasada-staklo-strukturalne.component';
import { FasadaStakloNstrukturalneComponent } from './fasada-staklo-nstrukturalne/fasada-staklo-nstrukturalne.component';
import { AluBondFasadeComponent } from './alu-bond-fasade/alu-bond-fasade.component';
import { SysProzoraVrataComponent } from './sys-prozora-vrata/sys-prozora-vrata.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ProductsComponent,
    ProjectsComponent,
    ContactComponent,
    System88Component,
    System76Component,
    System70Component,
    KlizniComponent,
    KlizniKComponent,
    KlizniPodiznoComponent,
    KlizniKombiComponent,
    AluProfiliComponent,
    Alu965Component,
    Alu11000Component,
    FasadaStakloComponent,
    FasadaStakloStrukturalneComponent,
    FasadaStakloNstrukturalneComponent,
    AluBondFasadeComponent,
    SysProzoraVrataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
