import {Box} from "@mui/material";
import {FC, memo, ReactNode} from "react";
import {BootstrapButton} from "../styledComponents/BootstrapButton";


interface IButton {
   isDisabled: boolean
   children: ReactNode
   type: "button" | "reset" | "submit"
}

let ButtonGradient:FC<IButton> = ({isDisabled,children,type}) => {

   return (
      <BootstrapButton
         disabled={isDisabled}
         sx={{

            gridColumn: {
               sm: "8/11",
               xs: "5/11"
            },
            gridRow: {
               sm: "3/4",
               xs: "4/5"
            }

         }}
         variant="contained"
         disableRipple
         type={type}
      >
         <Box
            sx={{
               textOverflow: "ellipsis",
               overflow: "hidden",
               position:"relative",
               zIndex: 2
            }}
            component={"span"}
         >{children}</Box>
      </BootstrapButton>
   );
}
export default memo(ButtonGradient)