import { Component, Input, OnInit } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { CalculatorModel } from '../../models/calculator/app-calculator.model'

@Component({
  selector: 'app-calculator-container',
  template: `<app-calculator [assets]="assets"></app-calculator>`
})
export class CalculatorContainerComponent implements OnInit {

  private _assets$: BehaviorSubject<CalculatorModel> = new BehaviorSubject<CalculatorModel>(null)

  @Input()
  set assets(value: CalculatorModel) { this._assets$.next(value) }
  get assets(): CalculatorModel { return this._assets$.getValue() }

  constructor() { }

  ngOnInit(): void { }

}
