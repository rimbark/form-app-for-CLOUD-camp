import { NavigateFunction } from 'react-router-dom'

export interface ModalDoneTypes {
  modal: boolean
  toggleModal: () => void
  navigate: NavigateFunction
}
