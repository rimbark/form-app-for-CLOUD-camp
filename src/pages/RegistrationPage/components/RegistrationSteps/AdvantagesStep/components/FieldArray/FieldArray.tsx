import { DeleteIcon } from '@chakra-ui/icons'
import {
  FormControl,
  FormHelperText,
  IconButton,
  Input,
} from '@chakra-ui/react'
import { AdvantagesFormsDataType } from 'pages/RegistrationPage/components/RegistrationSteps/AdvantagesStep/advantagesStep.types'
import React from 'react'
import {
  FieldArrayWithId,
  UseFieldArrayRemove,
  UseFormRegister,
} from 'react-hook-form'
import styles from './FieldArray.module.scss'

interface FormItemPropsType {
  register: UseFormRegister<AdvantagesFormsDataType>
  error?: any
  fields: FieldArrayWithId<AdvantagesFormsDataType, 'advantages', 'id'>[]
  remove: UseFieldArrayRemove
  append: any
}

export const FieldArray = ({
  register,
  error,
  fields,
  remove,
  append,
}: FormItemPropsType) => {
  const {
    inputBlock,
    inputWithError,
    inputsArray,
    appendButton,
    labelContainer,
  } = styles
  return (
    <FormControl>
      <span className={labelContainer}>Advantages</span>
      <div className={inputsArray}>
        {fields.map((field, index) => (
          <div key={field.id} className={inputBlock}>
            <div className={inputWithError}>
              <Input
                id={`field-advantages-${index}`}
                {...register(`advantages.${index}.value`, {
                  maxLength: {
                    value: 50,
                    message: 'Max 50 symbols',
                  },
                  required: 'Required to fill, or just delete it',
                })}
              />
              <FormHelperText fontSize="12px">
                {error?.[index]?.value.message}
              </FormHelperText>
            </div>
            <IconButton
              id={`button-remove-${index}`}
              aria-label="delete item"
              icon={<DeleteIcon />}
              onClick={() => remove(index)}
            />
          </div>
        ))}
      </div>
      <button
        id="button-add"
        className={appendButton}
        onClick={() => append({ value: '' })}
      />
    </FormControl>
  )
}
