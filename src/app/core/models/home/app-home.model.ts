import { NavbarModel } from '../navbar/app-navbar.model'
import { BannerModel } from '../banner/app-banner.model'
import { CalculatorFormModel, CalculatorModel } from '../calculator/app-calculator.model'
import { FeaturesModel } from '../features/app-feature.model'
import { AccountModel } from '../account/app-account.model'

export interface HomeModel {
  navbar: NavbarModel
  banner: BannerModel
  calculator: {
    assets: CalculatorModel
    form: CalculatorFormModel
  }
  features: FeaturesModel
  account: AccountModel
}
