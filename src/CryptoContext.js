import { onAuthStateChanged } from 'firebase/auth';
import React, { useContext } from 'react'
import {createContext} from 'react'
import { useState,useEffect } from 'react';
import {auth,db} from "./firebase";
import {doc, onSnapshot} from "firebase/firestore"; 
const Crypto = createContext()

const CryptoContext = ({ children }) => {
    const [currency, setCurrency] = useState("NGN");
    const [symbol, setSymbol] = useState("₦");
    const [user, setUser] = useState(null);
    const [alert, setAlert] = useState({
      open: false,
      message: "",
      type: "success",
    });

    const [watchlist, setWatchlist] = useState([]);

    useEffect(() => {
      if (user) {
        const coinRef = doc(db,"watchlist",user.uid)

        var unsubscribe = onSnapshot(coinRef,coin => {
          if (coin.exists()) {
              console.log(coin.data().coins);
              setWatchlist(coin.data().coins);
          }else{
            console.log("No Items in Watchlist");
          }

        });

        return () => {
          unsubscribe();
        };
      }
      
     }, [user]);
     

    useEffect(() => {
     onAuthStateChanged(auth,user => {
       if(user)setUser(user);
       else setUser(null);

        console.log(user);
     });
    }, []);
    




    useEffect(() => {
      if (currency === "NGN") setSymbol("₦");
      else if (currency === "USD") setSymbol("$");
    }, [currency])
    
  return (
    <Crypto.Provider value={{currency,symbol,setCurrency,alert,setAlert,user,watchlist,}}>
       {children}
    </Crypto.Provider>
  )
};

export default CryptoContext;

export const CryptoState = () => {
  return  useContext(Crypto);
};