import { FormControl, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { boxes } from 'pages/RegistrationPage/components/RegistrationSteps/AdvantagesStep/advantagesStep.constants'
import { AdvantagesFormsDataType } from 'pages/RegistrationPage/components/RegistrationSteps/AdvantagesStep/advantagesStep.types'
import React from 'react'
import { UseFormRegister } from 'react-hook-form'
import styles from '../FieldArray/FieldArray.module.scss'

interface FormItemPropsType {
  register: UseFormRegister<AdvantagesFormsDataType>
  radio: number | null
}

export const AdvantagesRadioGroup = ({
  register,
  radio,
}: FormItemPropsType) => {
  const { labelContainer } = styles
  return (
    <FormControl>
      <span className={labelContainer}>Radio group</span>
      <RadioGroup defaultValue={radio?.toString()}>
        <Stack direction="column">
          {boxes.map((item) => (
            <Radio
              key={item.toString()}
              width="10px"
              id={`field-radio-group-option-${item}`}
              value={item.toString()}
              {...register('radio')}
            >
              {item}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </FormControl>
  )
}
