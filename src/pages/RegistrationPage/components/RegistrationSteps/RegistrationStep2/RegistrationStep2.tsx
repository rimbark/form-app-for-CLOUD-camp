import { DeleteIcon } from '@chakra-ui/icons'
import {
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  Input,
  Radio,
  Stack,
} from '@chakra-ui/react'
import { NavButtonBack } from 'components/NavButtons/NavButtonBack/NavButtonBack'
import { NavButtonForward } from 'components/NavButtons/NavButtonForward/NavButtonForward'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import React, { useMemo } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { changeAdvantages, changeCheckBoxes } from 'redux/reducers/step2Slice'
import { RegistrationStepsPropsTypes } from '../registrationStepsProps.types'
import { boxes } from './registrationStep2.constants'
import styles from './RegistrationStep2.module.scss'
import { Step2FormData } from './registrationStep2.types'

export const RegistrationStep2 = ({
  navigate,
}: RegistrationStepsPropsTypes) => {
  const {
    container,
    formContainer,
    buttonsContainer,
    inputBlock,
    appendButton,
    inputsArray,
    inputWithError,
  } = styles
  const dispatch = useAppDispatch()
  const initialAdvantages = useAppSelector((state) => state.step2Reducer)
  const newAdvantages = initialAdvantages.advantages.map((value) => {
    return { value }
  })
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step2FormData>({
    defaultValues: {
      advantages: newAdvantages,
    },
    mode: 'onBlur',
    reValidateMode: 'onSubmit',
  })
  const { fields, append, remove } = useFieldArray({
    name: 'advantages',
    control,
  })
  const onSubmit = (data: Step2FormData) => {
    const refactoredAdvantagesData = data.advantages.map((item) => item.value)
    dispatch(changeAdvantages(refactoredAdvantagesData))
    const refactoredCheckboxData = data.checkBoxes
      .filter((item) => typeof item === 'string')
      .map(Number)
    dispatch(changeCheckBoxes(refactoredCheckboxData))
    // navigate('registration/step_3/')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={container}>
      <div className={formContainer}>
        <FormControl>
          <FormLabel fontSize="14px">Advantages</FormLabel>
          <div className={inputsArray}>
            {fields.map((field, index) => (
              <div key={field.id} className={inputBlock}>
                <div className={inputWithError}>
                  <Input
                    id={`field-advantages-${index}`}
                    {...register(`advantages.${index}.value`, {
                      required: 'Required to fill, or just delete it',
                    })}
                  />
                  <FormHelperText fontSize="12px">
                    {errors.advantages?.[index]?.value?.message}
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
        <FormControl>
          <FormLabel>Checkbox group</FormLabel>
          {useMemo(
            () => (
              <Stack direction={['row', 'column']}>
                {boxes.map((item, index) => (
                  <Checkbox
                    key={item.toString()}
                    id={`field-checkbox-group-option-${index}`}
                    defaultChecked={initialAdvantages.checkBoxes.includes(item)}
                    size="md"
                    value={item}
                    {...register(`checkBoxes.${index}`)}
                  >
                    {item}
                  </Checkbox>
                ))}
              </Stack>
            ),
            []
          )}
        </FormControl>
        <FormControl>
          <FormLabel>Radio group</FormLabel>
          <Stack>
            {boxes.map((item, index) => (
              <Radio
                key={item.toString()}
                id={`field-radio-group-option-${index}`}
                value={item}
                size="md"
                defaultChecked={initialAdvantages.radio === item}
                {...register(`radio.${index}`)}
              >
                {item}
              </Radio>
            ))}
          </Stack>
        </FormControl>
        <div className={buttonsContainer}>
          <NavButtonBack />
          <NavButtonForward />
        </div>
      </div>
    </form>
  )
}
