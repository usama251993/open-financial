import { Component, Input, OnInit } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { NavbarModel } from 'src/app/core/models/navbar/app-navbar.model'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private _assets$: BehaviorSubject<NavbarModel> = new BehaviorSubject<NavbarModel>(null)

  @Input()
  set assets(value: NavbarModel) { this._assets$.next(value) }
  get assets(): NavbarModel { return this._assets$.getValue() }

  constructor() { }

  ngOnInit(): void {
    console.groupCollapsed(`[NavbarComponent]`)
    console.log(this.assets)
    console.groupEnd()
  }

}
