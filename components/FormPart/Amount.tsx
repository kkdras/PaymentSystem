import {Controller} from "react-hook-form";
import {FC} from "react";
import {BootstrapInput} from "../styledComponents/BootstrapInput";

interface IAmount {
   control: any,
   errors: any
}

export let Amount:FC<IAmount> = ({control, errors}) => {
   return <Controller
      name="amount"
      control={control}
      rules={{
         validate: (value) => {
            return !!(+value && value)
         }
      }}
      render={({field}) => (
         <BootstrapInput
            error={!!errors.amount}
            {...field}
            variant="filled"
            label={
               errors.amount && errors.amount.message ||
               "Amount"
            }
            sx={{
               '& .MuiInputBase-input': {
                  fontSize: 18,
                  letterSpacing: 2
               },
               '& .MuiInputLabel-root:not(.MuiInputLabel-shrink)': {
                  fontSize: 18,
               },
               gridColumn: {
                  sm: "1/6",
                  xs: "1/11"
               },
               gridRow: {
                  sm: "2/3",
                  xs: "3/4"
               }
            }}
         />
      )}
   />
}