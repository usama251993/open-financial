import { AppImageModel } from '../common/app-image.model'

export interface AppNavbarAssetsModel {
  logo: AppImageModel | null
  menuItems: string[]
  login: string | null
  getStarted: string | null
}
