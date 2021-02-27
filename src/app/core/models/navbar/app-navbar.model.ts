import { AppImageModel } from '../common/app-image.model'

export interface NavbarModel {
  logo: AppImageModel | null
  menuItems: string[]
  login: string | null
  getStarted: string | null
}
