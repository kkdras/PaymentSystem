import {useForm} from "react-hook-form";
import {Box} from "@mui/material";
import {ButtonGradient} from "./FormPart/Button";
import {Amount} from "./FormPart/Amount";
import {Cvv} from "./FormPart/Cvv";
import {EplDate} from "./FormPart/ExpirationDate";
import {CardNumber} from "./FormPart/CardNumber";
import {IFullForm} from "../pages";
import {FC} from "react";

interface IForm {
   submit: (data:IFullForm) => void
}

let defaultValues = {
   CVV: "",
   cardNumber: "",
   expirationDate: "",
   amount: ""
}





export let Form:FC<IForm> = ({submit}) => {
   let {handleSubmit, control, formState: {errors, isValid}} = useForm<IFullForm>({defaultValues, mode: "onChange"})

   return <Box
      sx={{
         display: "grid",
         gridTemplateColumns: "repeat(10, 1fr)",
         gridTemplateRows: {
            sm: "1fr 1fr 1fr",
            xs: "1fr 1fr 1fr 1fr"
         },
         alignItems: "center",
         rowGap: "15px",
      }}
      onSubmit={handleSubmit(submit)}
      component={"form"}
   >
      <CardNumber errors={errors} control={control}/>

      <EplDate errors={errors} control={control}/>

      <Cvv errors={errors} control={control}/>

      <Amount errors={errors} control={control}/>

      <ButtonGradient
         type={"submit"}
         isDisabled={!isValid}
      >
         оплатить
      </ButtonGradient>
   </Box>
}

