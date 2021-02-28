import { Injectable } from '@angular/core'

import { BehaviorSubject, Observable } from 'rxjs'

import { HomeModel } from '../../models/home/app-home.model'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private _assets$: BehaviorSubject<HomeModel> = new BehaviorSubject<HomeModel>(null)

  private _assets: HomeModel

  constructor() { }

  fetchAssets(): void {
    this._assets = {
      navbar: {
        logo: {
          src: 'assets/images/01logo/logo.png',
          alt: 'Open Financial Logo'
        },
        menuItems: ['Products', 'Solutions', 'Pricing'],
        login: 'Login',
        getStarted: 'Get Started'
      },
      banner: {
        title: 'We make it Super Simple',
        image: {
          src: 'assets/images/03home/home.png',
          alt: 'Banner Image'
        },
        dots: {
          src: 'assets/images/10dots/dots.svg',
          alt: 'Banner Image'
        }
      },
      account: {
        title: 'Boost your business with Open',
        description: 'Get your hand on a term loan that\'s crafted for your business',
        button: 'Get an Open Account'
      },
      calculator: {}
    }
    this._assets$.next(this._assets)
  }

  watchAssets$(): Observable<HomeModel> {
    return this._assets$.asObservable()
  }
}
