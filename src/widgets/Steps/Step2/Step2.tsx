import { DeleteIcon } from '@chakra-ui/icons'
import {
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  Input,
  Stack,
} from '@chakra-ui/react'
import React, { useMemo } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { NavButtonBack } from '../../../components/NavButtons/NavButtonBack/NavButtonBack'
import { NavButtonForward } from '../../../components/NavButtons/NavButtonForward/NavButtonForward'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import {
  changeAdvantages,
  changeCheckBoxes,
} from '../../../redux/reducers/step2Slice'
import { StepsPropsTypes } from '../stepsProps.types'
import { boxes } from './step2.constants'
import styles from './Step2.module.scss'
import { Step2FormData } from './step2.types'

export const Step2 = ({ navigate }: StepsPropsTypes) => {
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
                    key={item.value.toString()}
                    defaultChecked={initialAdvantages.checkBoxes.includes(
                      item.value
                    )}
                    size="md"
                    value={item.value}
                    {...register(`checkBoxes.${index}`)}
                  >
                    {item.value}
                  </Checkbox>
                ))}
              </Stack>
            ),
            []
          )}
        </FormControl>
        <div className={buttonsContainer}>
          <NavButtonBack />
          <NavButtonForward />
        </div>
      </div>
    </form>
  )
}
