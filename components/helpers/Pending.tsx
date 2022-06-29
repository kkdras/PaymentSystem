import React, {FC, memo} from "react";
import {Box, CircularProgress} from "@mui/material";

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

export default memo(Pending)