import InputMask from "react-input-mask";
import {Controller} from "react-hook-form";
import {FC, memo} from "react";
import {BootstrapInput} from "../styledComponents/BootstrapInput";
import {ICustomInput} from "../helpers/types";



let ExpDate: FC<ICustomInput> = ({control, isError, errorMessage}) => {

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
            maskPlaceholder={""}
         >
            <BootstrapInput
               variant="filled"

               label={
                  errorMessage ||
                  "Срок действия карты"
               }
               error={isError}

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

         </InputMask>
      )}
   />
}

export default memo(ExpDate)