import {AppBar,Container,Toolbar,Typography,Select,MenuItem,ThemeProvider,createTheme} from "@material-ui/core";
import './Header.css';
import React from 'react'
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import AuthModal from '../Components/Authentication/AuthModal';
import UserSidebar from "./Authentication/UserSidebar";
const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

const Header = () => {
const navigate = useNavigate()

const {currency, setCurrency,user } = CryptoState()

console.log(currency);

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color="transparent" position="static">
     <Container>
      <Toolbar>
        <Typography variant="h6" onClick={() => navigate.push("/")} className="title"> Crypto Point</Typography>
         <Select variant="outlined" style={{
           width:100,
           height:40,
           marginRight:15,
         }}
         value={currency}
         onChange={(e) => setCurrency(e.target.value)}
         >
         <MenuItem value={'USD'}>USD</MenuItem>
         <MenuItem value={'NGN'}>NGN</MenuItem>
         </Select>
       
         {user ? <UserSidebar/> : <AuthModal/>}

      </Toolbar>
     </Container>
    </AppBar>
    </ThemeProvider>
  );
}

export default Header