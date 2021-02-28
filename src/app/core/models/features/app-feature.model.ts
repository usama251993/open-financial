import { AppImageModel } from '../common/app-image.model'

export interface FeaturesModel {
  left: {
    image: AppImageModel
    title: string | null
    description: string | null
  }[]
  right: {
    image: AppImageModel
    title: string | null
    description: string | null
  }[]
}
