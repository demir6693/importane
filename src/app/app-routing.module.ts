import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { SysProzoraVrataComponent } from './sys-prozora-vrata/sys-prozora-vrata.component';
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

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'project', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sistemi-prozora-ulaznih-vrata', component: SysProzoraVrataComponent},
  { path: '88mm-system', component: System88Component},
  { path: '76mm-system', component: System76Component},
  { path: '70mm-system', component: System70Component},
  { path: 'klizni', component: KlizniComponent },
  { path: 'klizni-k', component: KlizniKComponent},
  { path: 'podizno-klizni', component: KlizniPodiznoComponent},
  { path: 'kombi-system', component: KlizniKombiComponent },
  { path: 'alu-profili-alumil', component: AluProfiliComponent },
  { path: 'serie-965', component: Alu965Component },
  { path: 'seria-11000', component: Alu11000Component },
  { path: 'fasada-staklo', component: FasadaStakloComponent },
  { path: 'fasada-staklo-strukturalna', component: FasadaStakloStrukturalneComponent },
  { path: 'fasada-staklo-ne-strukturalne', component: FasadaStakloNstrukturalneComponent },
  { path: 'alu-bond-fasade', component: AluBondFasadeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
