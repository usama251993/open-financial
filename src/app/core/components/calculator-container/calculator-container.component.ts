import { Component, Input, OnInit } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { CalculatorModel, CalculatorFormModel } from '../../models/calculator/app-calculator.model'

@Component({
  selector: 'app-calculator-container',
  template: `<app-calculator [assets]="assets.assets" [form]="assets.form"></app-calculator>`
})
export class CalculatorContainerComponent implements OnInit {

  private _assets$: BehaviorSubject<CalculatorType> = new BehaviorSubject<CalculatorType>(null)

  @Input()
  set assets(value: CalculatorType) { this._assets$.next(value) }
  get assets(): CalculatorType { return this._assets$.getValue() }

  constructor() { }

  ngOnInit(): void { }

}

type CalculatorType = {
  assets: CalculatorModel,
  form: CalculatorFormModel
}
