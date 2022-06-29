import InputMask from "react-input-mask";
import {Controller} from "react-hook-form";
import {FC} from "react";
import {BootstrapInput} from "../styledComponents/BootstrapInput";
interface ICvv {
   control: any,
   errors: any
}
export let EplDate:FC<ICvv> = ({control,errors}) => {
   return <Controller
      name="expirationDate"
      control={control}
      rules={{
         validate: (value: string) => {
            return value.replace(/[^0-9]/g, '').length === 6 ||
               "Невалидный формат даты!"
         }
      }}
      render={({field}) => (
         <InputMask
            {...field}
            mask="99/9999"
            maskChar={""}
            label={
               errors.expirationDate && errors.expirationDate.message ||
               "Срок действия карты"
            }
            error={!!errors.expirationDate}
         >
            {(props) => {
               return <BootstrapInput
                  variant="filled"
                  {...props}
                  sx={{
                     '& .MuiInputBase-input': {
                        fontSize: 18,
                        letterSpacing: 2
                     },
                     '& .MuiInputLabel-root:not(.MuiInputLabel-shrink)': {
                        fontSize: 18,
                     },
                     gridColumn: {
                        sm: "7/11",
                        xs: "1/11"
                     },
                     gridRow: "2/3"
                  }}
               />
            }}
         </InputMask>
      )}
   />
}