import { BannerModel } from '../banner/app-banner.model'
import { NavbarModel } from '../navbar/app-navbar.model'

export interface HomeModel {
  navbar: NavbarModel
  banner: BannerModel
}
