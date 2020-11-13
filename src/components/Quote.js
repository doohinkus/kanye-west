import {Fragment, useState, useMemo} from 'react';
import {ShowQuote} from './ShowQuote';
import {Kanye} from './Kayne';
import {useFetch} from '../hooks/useFetch';
import './Quote.css';

export function Quote(){
  const [toggle, setToggle] = useState({toggle: false});
  const [state] = useFetch('https://api.kanye.rest?format=text', toggle);
  // const [kanyeStyle] = useKanye(toggle);
 

  function toggleQuote(){
      setToggle({toggle: !toggle.toggle});
  }


  return (
      <> 
        <Kanye {...toggle} />
        <h1>Kanye Says</h1>
        <ShowQuote {...state} />
        <button className="button" 
          onClick={() => toggleQuote()}>
            Get Quote
        </button>
      </>
  )
}