import { useState, useEffect } from 'react';
import axios from 'axios';

export function useFetch(){
  const [quote, setQuote] = useState("");
  const [toggle, setToggle] = useState({toggle: false});
  const endpoint =  "https://api.kanye.rest?format=text";

  useEffect(() => {
    // COMMON PATTERN USE VARIABLE FOR CLEANUP
    let loaded = false;
       async function fetchQuote(){
         const quote = await axios.get(endpoint);
         const { data } = await quote;
        //  console.log("QUOTE>>>>>", data);
           if(!loaded){
             setQuote(data);
           }
     }
     
     fetchQuote();

    // COMMON PATTERN USE VARIABLE FOR CLEANUP
     return () => {
        loaded = true;
     }
    // COMMON PATTERN USE VARIABLE FOR CLEANUP

    },[toggle]);
    return [{quote, toggle}, setToggle];
}
