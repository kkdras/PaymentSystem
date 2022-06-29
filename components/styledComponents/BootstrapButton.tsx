import {styled} from "@mui/system";
import {Button} from "@mui/material";

export let BootstrapButton = styled(Button)({
   boxShadow: "5px 5px 5px -2px rgba(155, 49, 1, 0.6)",
   textTransform: 'uppercase',
   fontSize: 16,
   padding: '10px 12px',
   lineHeight: 1.5,
   background: 'linear-gradient(130deg,#ff7a18,#af002d 41.07%,#319197 76.05%)',
   backgroundSize: '200% 200%',
   backgroundPosition: 'left',
   transition: 'all 0.3s ease 0s',
   position: 'relative',
   letterSpacing: "2px",
   width: "auto",
   color: "#fff",
   "&:hover": {
      backgroundPosition: "right",
      boxShadow: "-4px -3px 5px -2px rgba(0, 144, 255, 0.57)"
   },
   '&::after': {
      content: '""',
      position: 'absolute',
      width: 'calc(100% - 8px)',
      height: 'calc(100% - 8px)',
      backgroundColor: 'black',
      top: '4px',
      left: '4px',
      zIndex: 0,
      borderRadius: "3px",
   },
   "&.Mui-disabled": {
      color: "#333",
      boxShadow: "5px 5px 5px -2px rgba(155, 49, 1, 0.2)"
   }
});
