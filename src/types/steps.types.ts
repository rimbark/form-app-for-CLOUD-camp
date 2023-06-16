export interface InitialStep1Type {
  nickname: string
  name: string
  sername: string
  sex: 'man' | 'woman' | null
}

export interface InitialStep2Type {
  advantages: string[]
  checkBoxes: number[]
  radioBox: number | null
}
