import { Component, Input, OnInit } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { NavbarModel } from '../../models/navbar/app-navbar.model'

@Component({
  selector: 'app-navbar-container',
  template: `<app-navbar [assets]="assets"></app-navbar>`
})
export class NavbarContainerComponent implements OnInit {

  private _assets$: BehaviorSubject<NavbarModel> = new BehaviorSubject<NavbarModel>(null)

  @Input()
  set assets(value: NavbarModel) { this._assets$.next(value) }
  get assets(): NavbarModel { return this._assets$.getValue() }

  constructor() { }

  ngOnInit(): void { }

}
