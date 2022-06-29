import {styled} from "@mui/system";
import {OutlinedInputProps, TextField, TextFieldProps} from "@mui/material";

export let BootstrapInput = styled((props: TextFieldProps) => (
   <TextField
      InputProps={{disableUnderline: true} as Partial<OutlinedInputProps>}
      {...props}
   />
))(({theme}) => {
   return {

      '& .MuiFilledInput-root': {
         border: '1px solid #e2e2e1',
         overflow: 'hidden',
         borderRadius: 4,
         backgroundColor: 'rgba(217,216,216,0.95)',
         transition: "all 0.3s ease 0s",
         boxShadow: " 0px 5px 10px 2px rgba(0, 0, 0, 0.1)",
         '&:hover': {
            backgroundColor: 'rgba(217,216,216,0.95)',
            boxShadow: " 0px 5px 10px 2px rgba(0, 0, 0, 0.2)"
         },
         '&.Mui-focused': {
            "&:not(.Mui-error)": {
               boxShadow: " 0px 5px 10px 2px rgba(0, 0, 0, 0.4)",
            },
            backgroundColor: 'rgba(217,216,216,0.95)',
            borderColor: "#f1d5d5",
         },
         "&.Mui-error": {
            "&": {
               borderColor: "#d21919",
            }
         }
      },
   }
});