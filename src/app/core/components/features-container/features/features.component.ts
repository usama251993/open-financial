import { Component, Input, OnInit } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { FeaturesModel } from '../../../models/features/app-feature.model'

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  private _assets$: BehaviorSubject<FeaturesModel> = new BehaviorSubject<FeaturesModel>(null)

  @Input()
  set assets(value: FeaturesModel) { this._assets$.next(value) }
  get assets(): FeaturesModel { return this._assets$.getValue() }

  constructor() { }

  ngOnInit(): void {
  }

}
