import { AppFormModel, AppFormRangeModel, AppSelectModel } from '../common/app-form.model'

export interface CalculatorModel {
  form: {
    title: string | null,
    repayment: AppSelectModel[]
  }
  summary: {
    loan: string | null
    emi: string | null
  }
}

export interface CalculatorFormModel {
  income: AppFormRangeModel
  expense: AppFormRangeModel
  repayment: AppFormModel
  loans: AppFormModel
  emi: AppFormModel
  submit: AppFormModel
}
