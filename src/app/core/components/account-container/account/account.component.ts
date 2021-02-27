import { Component, Input, OnInit } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { AccountModel } from 'src/app/core/models/account/app-account.model'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  private _assets$: BehaviorSubject<AccountModel> = new BehaviorSubject<AccountModel>(null)

  @Input()
  set assets(value: AccountModel) { this._assets$.next(value) }
  get assets(): AccountModel { return this._assets$.getValue() }

  constructor() { }

  ngOnInit(): void {
  }

}
