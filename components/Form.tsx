import {useForm} from "react-hook-form";
import {Box} from "@mui/material";
import ButtonGradient from "./FormPart/Button";
import Amount from "./FormPart/Amount";
import Cvv from "./FormPart/Cvv";
import ExpDate from "./FormPart/ExpirationDate";
import CardNumber from "./FormPart/CardNumber";
import {IFullForm} from "../pages";
import React, {FC, memo} from "react";

interface IForm {
   submit: (data:IFullForm) => void
}

let defaultValues = {
   CVV: "",
   cardNumber: "",
   expirationDate: "",
   amount: ""
}


let Form:FC<IForm> = ({submit}) => {
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
      <CardNumber
         isError={!!errors.cardNumber}
         errorMessage={errors.cardNumber?.message || ""}
         control={control}
      />

      <ExpDate
         isError={!!errors.expirationDate}
         errorMessage={errors.expirationDate?.message || ""}
         control={control}
      />

      <Cvv
         isError={!!errors.CVV}
         errorMessage={errors.CVV?.message || ""}
         control={control}
      />

      <Amount
         isError={!!errors.amount}
         errorMessage={errors.amount?.message || ""}
         control={control}
      />

      <ButtonGradient
         type={"submit"}
         isDisabled={!isValid}
      >
         оплатить
      </ButtonGradient>
   </Box>
}

export default memo(Form)