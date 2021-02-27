import { Component, Input, OnInit } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { AccountModel } from '../../models/account/app-account.model'

@Component({
  selector: 'app-account-container',
  template: `<app-account [assets]="assets"></app-account>`
})
export class AccountContainerComponent implements OnInit {

  private _assets$: BehaviorSubject<AccountModel> = new BehaviorSubject<AccountModel>(null)

  @Input()
  set assets(value: AccountModel) { this._assets$.next(value) }
  get assets(): AccountModel { return this._assets$.getValue() }

  constructor() { }

  ngOnInit(): void {
  }

}
