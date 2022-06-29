import {FC, memo} from "react";
import {Alert} from "@mui/material";

interface ICustomAlert {
   showAlert: boolean
   alertType: "error" | "success" | ""
   alertMessage: string
}

let CustomAlert: FC<ICustomAlert> = ({showAlert, alertType, alertMessage}) => {
   return <>
      {showAlert && alertType && <Alert sx={{
         position: "absolute",
         top: 10,
         left: 10,
         zIndex: 1000,
         boxShadow: "5px 5px 8px -1px rgba(0, 0, 0, 0.6)",
         maxWidth: "calc(100vw - 20px)",
         ".MuiAlert-message":{
            textOverflow: "ellipsis",
            overflow: "hidden",
         }
      }} variant="filled" severity={alertType}>
         {alertMessage}
      </Alert>}
   </>
}
export default memo(CustomAlert)