import { Component, Input, OnInit, ViewChild } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { MatSlideToggle, MatSlideToggleChange } from '@angular/material/slide-toggle'

import { BehaviorSubject } from 'rxjs'

import { CalculatorModel, CalculatorFormModel } from 'src/app/core/models/calculator/app-calculator.model'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  private _assets$: BehaviorSubject<CalculatorModel> = new BehaviorSubject<CalculatorModel>(null)
  private _form$: BehaviorSubject<CalculatorFormModel> = new BehaviorSubject<CalculatorFormModel>(null)

  @Input()
  set assets(value: CalculatorModel) { this._assets$.next(value) }
  get assets(): CalculatorModel { return this._assets$.getValue() }

  @Input()
  set form(value: CalculatorFormModel) { this._form$.next(value) }
  get form(): CalculatorFormModel { return this._form$.getValue() }

  formGroup: FormGroup

  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formGroup = this._fb.group({
      income: [{ ...this.form.income.initialization }],
      expense: [{ ...this.form.expense.initialization }],
      repayment: [{ ...this.form.repayment.initialization }],
      loans: [{ ...this.form.loans.initialization }],
      emi: [{ ...this.form.emi.initialization }]
    })
  }

  updateExpenseMax($: number): void {
    this.form.expense.max = $
  }

  toggleLoan($: MatSlideToggleChange): void {
    if ($.checked) this.formGroup.get(this.form.emi.name).enable()
    else this.formGroup.get(this.form.emi.name).disable()
  }

}
