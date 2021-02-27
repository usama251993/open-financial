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
      }
    }
    this._assets$.next(this._assets)
  }

  watchAssets$(): Observable<HomeModel> {
    return this._assets$.asObservable()
  }
}
