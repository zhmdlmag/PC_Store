import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { GpuComponent } from './catalog/products/gpu/gpu.component';
import { CpuComponent } from './catalog/products/cpu/cpu.component';
import { MboardComponent } from './catalog/products/mboard/mboard.component';
import { PowerComponent } from './catalog/products/power/power.component';
import { CoolingComponent } from './catalog/products/cooling/cooling.component';
import { RamComponent } from './catalog/products/ram/ram.component';
import { CaseComponent } from './catalog/products/case/case.component';
import { DriveComponent } from './catalog/products/drive/drive.component';
import { StaffComponent } from './catalog/products/staff/staff.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SigninComponent } from './signin/signin.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CatalogComponent,
    ContactUsComponent,
    LoginComponent,
    GpuComponent,
    CpuComponent,
    MboardComponent,
    PowerComponent,
    CoolingComponent,
    RamComponent,
    CaseComponent,
    DriveComponent,
    StaffComponent,
    FooterComponent,
    CartComponent,
    SigninComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', component: HeaderComponent},
      {path: 'catalog', component: CatalogComponent},
      {path: 'contacts', component: ContactUsComponent},
      {path: 'login', component: LoginComponent},
      {path: 'catalog/gpu', component: GpuComponent},
      {path: 'catalog/cpu', component: CpuComponent},
      {path: 'catalog/mboard', component: MboardComponent},
      {path: 'catalog/power', component: PowerComponent},
      {path: 'catalog/cooling', component: CoolingComponent},
      {path: 'catalog/ram', component: RamComponent},
      {path: 'catalog/case', component: CaseComponent},
      {path: 'catalog/drive', component: DriveComponent},
      {path: 'catalog/staff', component: StaffComponent},
      {path: 'cart', component: CartComponent},
      {path: 'signin', component: SigninComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
