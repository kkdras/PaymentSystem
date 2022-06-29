import {Controller} from "react-hook-form";
import {FC, memo} from "react";
import {BootstrapInput} from "../styledComponents/BootstrapInput";
import {ICustomInput} from "../../src/types/types";

let Amount:FC<ICustomInput> = ({control, isError, errorMessage}) => {
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
            error={isError}
            {...field}
            variant="filled"
            label={
               errorMessage ||
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

export default memo(Amount)