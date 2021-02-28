import { Component, Input, OnInit } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { CalculatorModel } from 'src/app/core/models/calculator/app-calculator.model'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  private _assets$: BehaviorSubject<CalculatorModel> = new BehaviorSubject<CalculatorModel>(null)

  @Input()
  set assets(value: CalculatorModel) { this._assets$.next(value) }
  get assets(): CalculatorModel { return this._assets$.getValue() }

  constructor() { }

  ngOnInit(): void { }

}
