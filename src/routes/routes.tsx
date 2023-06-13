import { HomePage } from '../pages/HomePage/HomePage'
import { RegistrationPage } from '../pages/RegistrationPage/RegistrationPage'
import { Step1 } from '../pages/Step1/Step1'
import { Step2 } from '../pages/Step2/Step2'
import { Step3 } from '../pages/Step3/Step3'
import { RoutesTypes } from './routesTypes'

export enum RouteNames {
  HOME_PAGE = '/',
  REGISTRATION_PAGE = 'registration/*',
  STEP_1 = 'step_1/',
  STEP_2 = 'step_2/',
  STEP_3 = 'step_3',
}

export const homePageRoutes: RoutesTypes[] = [
  { id: 1, path: RouteNames.HOME_PAGE, element: <HomePage /> },
]
export const registrationPageRoutes: RoutesTypes[] = [
  { id: 1, path: RouteNames.REGISTRATION_PAGE, element: <RegistrationPage /> },
]
export const stepsRoutes: RoutesTypes[] = [
  { id: 1, path: RouteNames.STEP_1, element: <Step1 /> },
  { id: 2, path: RouteNames.STEP_2, element: <Step2 /> },
  { id: 3, path: RouteNames.STEP_3, element: <Step3 /> },
]
