import {
  Progress,
  Step,
  StepIcon,
  StepIndicator,
  Stepper,
  StepStatus,
  useSteps,
} from '@chakra-ui/react'
import { useAppSelector } from 'hooks/redux'
import React, { useEffect } from 'react'
import styles from './FormStepper.module.scss'

export const FormStepper = () => {
  const { container } = styles

  const stepsData = useAppSelector((state) => state.stepperReducer)

  const { activeStep, setActiveStep } = useSteps({
    index: stepsData.currentStep,
    count: stepsData.steps.length,
  })
  const max = stepsData.steps.length - 1
  const progressPercent = (activeStep / max) * 100

  useEffect(() => {
    setActiveStep(stepsData.currentStep)
  }, [stepsData.currentStep])

  return (
    <div className={container}>
      <Stepper size="xs" index={activeStep - 1} gap="0">
        {stepsData.steps.map((step) => (
          <Step key={step.title}>
            <StepIndicator zIndex={3} bg="white">
              <StepStatus complete={<StepIcon />} active="" />
            </StepIndicator>
          </Step>
        ))}
      </Stepper>
      <Progress
        value={progressPercent}
        position="absolute"
        height="3px"
        width="full"
        top="73px"
        zIndex={0}
      />
    </div>
  )
}
