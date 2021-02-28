import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { AppMaterialModule } from '../app-material.module'

import { CoreRoutingModule } from './core-routing.module'

import { HomeContainerComponent } from './components/home-container/home-container.component'
import { HomeComponent } from './components/home-container/home/home.component'

import { NavbarContainerComponent } from './components/navbar-container/navbar-container.component'
import { NavbarComponent } from './components/navbar-container/navbar/navbar.component'

import { FooterContainerComponent } from './components/footer-container/footer-container.component'
import { FooterComponent } from './components/footer-container/footer/footer.component'

import { BannerContainerComponent } from './components/banner-container/banner-container.component'
import { BannerComponent } from './components/banner-container/banner/banner.component'

import { CalculatorContainerComponent } from './components/calculator-container/calculator-container.component'
import { CalculatorComponent } from './components/calculator-container/calculator/calculator.component'

import { FeaturesContainerComponent } from './components/features-container/features-container.component'
import { FeaturesComponent } from './components/features-container/features/features.component'

import { AccountContainerComponent } from './components/account-container/account-container.component'
import { AccountComponent } from './components/account-container/account/account.component'

import { AppCurrencyPipe } from './services/pipes/app-currency.pipe'

@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeComponent,
    NavbarContainerComponent,
    NavbarComponent,
    FooterContainerComponent,
    FooterComponent,
    BannerContainerComponent,
    BannerComponent,
    CalculatorContainerComponent,
    CalculatorComponent,
    FeaturesContainerComponent,
    FeaturesComponent,
    AccountContainerComponent,
    AccountComponent,
    AppCurrencyPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreRoutingModule,
    AppMaterialModule
  ]
})
export class CoreModule { }
