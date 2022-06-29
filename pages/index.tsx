import {FC, useCallback, useEffect, useRef, useState} from 'react'
import {Alert, Box, CircularProgress, Typography} from "@mui/material"
import {Form} from "../components/Form";


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
         res = await fetch("http://localhost:3000/api/card", {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json;charset=utf-8',
               Accept: 'application/json',
            },
            body: JSON.stringify(data)
         })
         let result = await res.json()
         if (res.ok) {
            setAlertType("success")
         } else {
            setAlertType("error")
         }
         setAlertMessage(JSON.stringify(result))
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

let Pending: FC<{ pending: boolean }> = ({pending}) => {
   return <>
      {pending && <Box sx={{
         position: "absolute",
         borderRadius: "20px",
         top: 0,
         left: 0,
         width: "100%",
         height: "100%",
         backgroundColor: "#333",
         opacity: "0.7",
         display: "flex",
         alignItems: "center",
         justifyContent: "center",
         zIndex: 100
      }}><CircularProgress/></Box>}
   </>
}

interface ICustomAlert {
   showAlert: boolean
   alertType: "error" | "success" | ""
   alertMessage: string
}

let CustomAlert: FC<ICustomAlert> = ({showAlert, alertType, alertMessage}) => {
   return <>
      {showAlert && alertType &&
      <Alert sx={{
         position: "absolute",
         top: 10,
         left: 10,
         zIndex: 1000
      }} variant="filled" severity={alertType}>
         {alertMessage}
      </Alert>}
   </>
}