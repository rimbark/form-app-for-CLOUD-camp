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
import { selectStepper } from 'redux/form.selectors'
import styles from './FormStepper.module.scss'

export const FormStepper = () => {
  const { container, stepNum } = styles

  const stepsData = useAppSelector(selectStepper)

  const { activeStep, setActiveStep } = useSteps({
    index: stepsData.currentStep,
    count: stepsData.steps.length,
  })
  console.log(stepsData.currentStep)
  const progressPercent = activeStep === 1 ? 0 : activeStep === 2 ? 50 : 100

  useEffect(() => {
    setActiveStep(stepsData.currentStep)
  }, [setActiveStep, stepsData.currentStep])

  return (
    <div className={container}>
      <Stepper size="xs" index={activeStep - 1} gap="0">
        {stepsData.steps.map((step, index) => (
          <Step key={step.title}>
            <StepIndicator zIndex={3} bg="white">
              <StepStatus complete={<StepIcon />} active="" />
            </StepIndicator>
            <div className={stepNum}>{index + 1}</div>
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
