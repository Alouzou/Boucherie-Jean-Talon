import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { QualityComponent } from './quality/quality.component';
import { MustComponent } from './must/must.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, ProductsComponent, QualityComponent, MustComponent, FooterComponent, TestimonialsComponent, ProductsDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
