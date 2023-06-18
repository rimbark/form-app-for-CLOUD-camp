export interface InitialStepperType {
  steps: StepType[]
  currentStep: number
}

interface StepType {
  title: string
  description: string
}
