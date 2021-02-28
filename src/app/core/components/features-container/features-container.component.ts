import { Component, Input, OnInit } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { FeaturesModel } from '../../models/features/app-feature.model'

@Component({
  selector: 'app-features-container',
  template: `<app-features [assets]="assets"></app-features>`
})
export class FeaturesContainerComponent implements OnInit {

  private _assets$: BehaviorSubject<FeaturesModel> = new BehaviorSubject<FeaturesModel>(null)

  @Input()
  set assets(value: FeaturesModel) { this._assets$.next(value) }
  get assets(): FeaturesModel { return this._assets$.getValue() }

  constructor() { }

  ngOnInit(): void {
  }

}
