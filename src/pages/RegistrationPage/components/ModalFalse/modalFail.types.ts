import { NavigateFunction } from 'react-router-dom'

export interface ModalFailTypes {
  modal: boolean
  toggleModal: () => void
  navigate: NavigateFunction
}
