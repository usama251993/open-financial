import { Component, Input, OnInit } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { BannerModel } from 'src/app/core/models/banner/app-banner.model'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  private _assets$: BehaviorSubject<BannerModel> = new BehaviorSubject<BannerModel>(null)

  @Input()
  set assets(value: BannerModel) { this._assets$.next(value) }
  get assets(): BannerModel { return this._assets$.getValue() }

  constructor() { }

  ngOnInit(): void { }

}
