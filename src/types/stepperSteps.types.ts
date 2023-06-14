export interface initialStepperType {
  steps: stepType[]
  currentStep: number
}

interface stepType {
  title: string
  description: string
}
