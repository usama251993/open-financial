export interface AppFormModel {
  name: string | null
  type: string | null
  label: string | null
  initialization: {
    value: string | boolean | number | null
    disabled: boolean
  }
}

export interface AppFormRangeModel extends AppFormModel {
  min: number
  max: number
}

export interface AppSelectModel {
  value: string | number | null
  viewValue: string | null
}
