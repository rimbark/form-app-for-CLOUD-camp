import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react'
import { boxes } from 'pages/RegistrationPage/components/RegistrationSteps/AdvantagesStep/advantagesStep.constants'
import { AdvantagesFormsDataType } from 'pages/RegistrationPage/components/RegistrationSteps/AdvantagesStep/advantagesStep.types'
import React from 'react'
import { UseFormRegister } from 'react-hook-form'

interface FormItemPropsType {
  register: UseFormRegister<AdvantagesFormsDataType>
  radio: number | null
}

export const AdvantagesRadioGroup = ({
  register,
  radio,
}: FormItemPropsType) => {
  return (
    <FormControl>
      <FormLabel htmlFor="radio-group">Radio group</FormLabel>
      <RadioGroup id="radio-group" defaultValue={radio?.toString()}>
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
