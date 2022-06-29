import InputMask from "react-input-mask";
import {Controller} from "react-hook-form";
import {FC, memo} from "react";
import {BootstrapInput} from "../styledComponents/BootstrapInput";
import {maskBeforeOnChange} from "../helpers/functions";
import {ICustomInput} from "../../src/types/types";




let CardNumber: FC<ICustomInput> = ({control, isError, errorMessage}) => {

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
               mask="9999 9999 9999 9999"
               {...field}
               maskPlaceholder={""}
               beforeMaskedStateChange={maskBeforeOnChange}
            >
               <BootstrapInput
                  label={
                     errorMessage ||
                     "Номер карты"
                  }
                  error={isError}
                  variant="filled"

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
            </InputMask>
         )
      }}
   />
}

export default memo(CardNumber)