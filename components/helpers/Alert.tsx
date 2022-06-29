import {FC, memo} from "react";
import {Alert} from "@mui/material";

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
export default memo(CustomAlert)