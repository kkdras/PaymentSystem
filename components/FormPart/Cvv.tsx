import InputMask from "react-input-mask";
import {Controller} from "react-hook-form";
import {FC} from "react";
import {BootstrapInput} from "../styledComponents/BootstrapInput";
interface ICvv {
   control: any,
   errors: any
}
export let Cvv:FC<ICvv> = ({control,errors}) => {
   return <Controller
      name="CVV"
      control={control}
      rules={{
         validate: (value: string) => {
            return value.replace(/[^0-9]/g, '').length === 3 ||
               "Неверный формат cvv"
         }
      }}
      render={({field}) => (
         <InputMask
            {...field}
            error={!!errors.CVV}
            mask="999"
            alwaysShowMask={true}
            label={
               errors.CVV && errors.CVV.message ||
               "CVV"
            }
         >
            {(props) => {
               return <BootstrapInput
                  {...props}
                  variant="filled"
                  sx={{
                     '& .MuiInputBase-input': {
                        fontSize: 18,
                        letterSpacing: 2
                     },
                     '& .MuiInputLabel-root:not(.MuiInputLabel-shrink)': {
                        fontSize: 18,
                     },
                     gridColumn: {
                        sm: "1/3",
                        xs: "1/4"
                     },
                     gridRow: {
                        sm: "3/4",
                        xs: "4/5"
                     },
                  }}
               />
            }}
         </InputMask>
      )}
   />
}