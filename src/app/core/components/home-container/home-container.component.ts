import { Component, OnInit } from '@angular/core'

import { Observable } from 'rxjs'

import { HomeModel } from '../../models/home/app-home.model'
import { HomeService } from '../../services/home/home.service'

@Component({
  selector: 'app-home-container',
  template: `<app-home [assets] = "assets$ | async"></app-home>`
})
export class HomeContainerComponent implements OnInit {

  assets$: Observable<HomeModel>

  constructor(
    private _homeService: HomeService
  ) { }

  ngOnInit(): void {
    this._homeService.fetchAssets()
    this.assets$ = this._homeService.watchAssets$()
  }

}
