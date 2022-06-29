import InputMask from "react-input-mask";
import {Controller} from "react-hook-form";
import {FC} from "react";
import {BootstrapInput} from "../styledComponents/BootstrapInput";
interface ICvv {
   control: any,
   errors: any
}

let splitByFour = (str, placeholder) => {
   let newString = ""
   for (let i = 0; i < 16; i++) {
      if (i % 4 === 0 && i) newString += " "
      if (str[i]) newString += str[i]
      else newString += placeholder
   }
   return newString
}



let maskBeforeOnChange = (newState, oldState) => {
   let newClearValue = newState.value.replace(/[^0-9]/g, '')
   let oldClearValue = oldState.value.replace(/[^0-9]/g, '')
   let range = newClearValue.length - oldClearValue.length
   if (0 > range) {
      let newValue = oldClearValue.slice(0, newClearValue.length)
      return {
         value: splitByFour(newValue, " "),
         selection: {
            start: newValue.length + Math.floor(newValue.length / 4),
            end: newValue.length + Math.floor(newValue.length / 4)
         }
      }
   }
   return newState
}




export let CardNumber:FC<ICvv> = ({control,errors}) => {
   return <Controller
      name="cardNumber"
      control={control}
      rules={{
         validate: (value: string) => {
            return value.replace(/[^0-9]/g, '').length === 16 ||
               "Необходимо указать номер карты полностью!"
         }
      }}
      render={({field}) => {
         return (
            <InputMask
               label={
                  errors.cardNumber && errors.cardNumber.message ||
                  "Номер карты"
               }
               error={!!errors.cardNumber}
               mask="9999 9999 9999 9999"
               {...field}
               maskChar={""}
               beforeMaskedValueChange={maskBeforeOnChange}
            >
               {(props) => {
                  return <BootstrapInput
                     variant="filled"
                     {...props}
                     sx={{
                        gridColumn: "1/11",
                        '& .MuiInputBase-input': {
                           fontSize: 22,
                           letterSpacing: 2
                        },
                        '& .MuiInputLabel-root:not(.MuiInputLabel-shrink)': {
                           fontSize: 22,
                        },
                     }}/>
               }}
            </InputMask>
         )
      }}
   />
}