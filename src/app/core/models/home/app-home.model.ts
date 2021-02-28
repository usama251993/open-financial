import { NavbarModel } from '../navbar/app-navbar.model'
import { BannerModel } from '../banner/app-banner.model'
import { CalculatorFormModel, CalculatorModel } from '../calculator/app-calculator.model'
import { AccountModel } from '../account/app-account.model'

export interface HomeModel {
  navbar: NavbarModel
  banner: BannerModel
  calculator: {
    assets: CalculatorModel
    form: CalculatorFormModel
  }
  account: AccountModel
}
