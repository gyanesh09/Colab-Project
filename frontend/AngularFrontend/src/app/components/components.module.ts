import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ExploreComponent } from './explore/explore.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards/cards.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ComponentsRoutingModule } from './components-routing.module'; 


@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    CarouselComponent,
    ExploreComponent,
    AboutComponent,
    ContactUsComponent,
    CardComponent,
    CardsComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  exports:[
    HomeComponent,
    NavBarComponent,
    CarouselComponent,
    ExploreComponent ,
     AboutComponent ,
    ContactUsComponent ,
     CardComponent ,
     CardsComponent ,
     RegisterComponent, 
    LoginComponent 
  ]
})
export class ComponentsModule { }
