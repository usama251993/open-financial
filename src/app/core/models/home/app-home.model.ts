import { NavbarModel } from '../navbar/app-navbar.model'
import { BannerModel } from '../banner/app-banner.model'
import { AccountModel } from '../account/app-account.model'

export interface HomeModel {
  navbar: NavbarModel
  banner: BannerModel
  account: AccountModel
}
