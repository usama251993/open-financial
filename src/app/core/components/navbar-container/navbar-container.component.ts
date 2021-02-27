import { Component, Input, OnInit } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { AppNavbarAssetsModel } from '../../models/navbar/app-navbar.model'

@Component({
  selector: 'app-navbar-container',
  template: `<app-navbar [assets]="assets"></app-navbar>`
})
export class NavbarContainerComponent implements OnInit {

  private _assets$: BehaviorSubject<AppNavbarAssetsModel> = new BehaviorSubject<AppNavbarAssetsModel>(null)

  @Input()
  set assets(value: AppNavbarAssetsModel) { this._assets$.next(value) }
  get assets(): AppNavbarAssetsModel { return this._assets$.getValue() }

  constructor() { }

  ngOnInit(): void { }

}
