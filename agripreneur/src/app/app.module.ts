import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FarmersComponent } from './farmers/farmers.component';
import { ProductsComponent } from './products/products.component';
import { MarketComponent } from './market/market.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HttpComponent } from './http/http.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { FarmerProfileComponent } from './farmer-profile/farmer-profile.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'market', component: MarketComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'nav', component: NavbarComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'customer', component: CustomerProfileComponent },
  { path: 'admin', component: AdminNavbarComponent },
  { path: 'farmer', component: FarmerProfileComponent },
  { path: 'farmerslist', component: FarmersComponent },
  { path: 'about', component: AboutComponent }


];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FarmersComponent,
    ProductsComponent,
    MarketComponent,
    AdminNavbarComponent,
    AboutComponent,
    LoginComponent,
    FooterComponent,
    SignupComponent,
    HomeComponent,
    HttpComponent,
    CustomerProfileComponent,
    FarmerProfileComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
