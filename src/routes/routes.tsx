import { HomePage } from '../pages/HomePage/HomePage'
import { Step1 } from '../pages/Step1/Step1'
import { Step2 } from '../pages/Step2/Step2'
import { Step3 } from '../pages/Step3/Step3'
import { RoutesTypes } from './routesTypes'

export enum RouteNames {
  HOME = '/',
  STEP_1 = '/step_1',
  STEP_2 = '/step_2',
  STEP_3 = '/step_3',
}

export const routes: RoutesTypes[] = [
  { id: 1, path: RouteNames.HOME, element: <HomePage /> },
  { id: 2, path: RouteNames.STEP_1, element: <Step1 /> },
  { id: 3, path: RouteNames.STEP_2, element: <Step2 /> },
  { id: 4, path: RouteNames.STEP_3, element: <Step3 /> },
]
