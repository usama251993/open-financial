import { Component, Input, OnInit } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { AppNavbarAssetsModel } from 'src/app/core/models/navbar/app-navbar.model'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private _assets$: BehaviorSubject<AppNavbarAssetsModel> = new BehaviorSubject<AppNavbarAssetsModel>(null)

  @Input()
  set assets(value: AppNavbarAssetsModel) { this._assets$.next(value) }
  get assets(): AppNavbarAssetsModel { return this._assets$.getValue() }

  constructor() { }

  ngOnInit(): void {
    console.groupCollapsed(`[NavbarComponent]`)
    console.log(this.assets)
    console.groupEnd()
  }

}
