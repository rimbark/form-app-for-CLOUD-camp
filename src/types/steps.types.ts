export interface InitialDataType {
  contactsData: ContactsDataType
  userInformationStepData: UserInformationDataType
  advantagesStepData: AdvantagesDataType
  aboutStepData: AboutDataType
}

export interface ContactsDataType {
  phone: string
  email: string
}

export interface UserInformationDataType {
  nickname: string
  name: string
  sername: string
  sex: 'man' | 'woman' | null
}

export interface AdvantagesDataType {
  advantages: string[]
  checkBoxes: number[]
  radio: number | null
}

export interface AboutDataType {
  about: string
}
