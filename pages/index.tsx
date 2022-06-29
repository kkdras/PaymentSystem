import {useCallback, useEffect, useRef, useState} from 'react'
import {Box, Typography} from "@mui/material"
import Form from "../components/Form";
import Pending from "../components/helpers/Pending";
import CustomAlert from "../components/helpers/Alert";


export interface IFullForm {
   cardNumber: string
   expirationDate: string
   CVV: string
   amount: string
}


let Home = () => {
   let [showAlert, setShowAlert] = useState(false)
   let [alertMessage, setAlertMessage] = useState("")
   let [alertType, setAlertType] = useState<"error" | "success" | "">("")
   let [pending, setPending] = useState(false)
   let alertTimeout = useRef(null)

   let onSubmit = useCallback(async (data: IFullForm) => {
      for (let dataKey in data) {
         data[dataKey] = data[dataKey].replace(/[^0-9]/g, '')
      }
      let res
      setPending(true)
      try {
         res = await fetch("/api/card", {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json;charset=utf-8',
               Accept: 'application/json',
            },
            body: JSON.stringify(data)
         })
         let result = await res.text()
         if (res.ok) {
            setAlertType("success")
         } else {
            setAlertType("error")
         }
         setAlertMessage(result)
      } catch (e) {
         setAlertMessage(JSON.stringify(e.message))
         setAlertType("error")
      } finally {
         setPending(false)
         setShowAlert(true)
      }
   }, [])

   useEffect(() => {
      alertTimeout.current = setTimeout(() => {
         if (showAlert) {
            setShowAlert(false)
            setAlertMessage("")
            setAlertType("")
         }
      }, 8000)
      return () => {
         clearTimeout(alertTimeout.current)
      }
   }, [showAlert])

   return <Box sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100%",
      minWidth: "100%",
      background: "linear-gradient(45deg,#cc2b5e,#753a88)",
      padding: "10px",
      position: "relative"
   }}>
      <CustomAlert alertMessage={alertMessage} alertType={alertType} showAlert={showAlert}/>
      <Box
         sx={{
            background: "#323232",
            maxWidth: "900px",
            flexWrap: "wrap",
            borderRadius: "20px",
            padding: "30px",
            boxShadow: "5px 5px 5px -5px rgba(0, 0, 0, 0.6)",
            display: "flex",
            flexDirection: "column",
            position: "relative"
         }}
      >
         <Pending pending={pending}/>
         <Box
            sx={{
               marginBottom: "25px"
            }}
         >
            <Typography sx={{color: "#fff"}} variant={"h4"}>ККР Платежная система </Typography>
            <Typography sx={{color: "#fff"}} variant={"body2"}>* принимаются карты российских и зарубежных банков,
               комиссия 5%</Typography>
         </Box>
         <Form submit={onSubmit}/>
      </Box>
   </Box>

}
export default Home



