import {Fragment, useState, useMemo} from 'react';
import {ShowQuote} from './ShowQuote';
import {Kanye} from './Kayne';
import { KanyeMotion } from './KayneMotion';
import { BounceIn } from './BounceIn';
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
        {/* <Kanye {...toggle} /> */}
        <KanyeMotion {...toggle}/>
        <h1>Kanye Says</h1>
        {/* <BounceIn delay={.3} {...toggle}>
         <span>
            &ldquo;{state.data}&rdquo;
         </span>
        </BounceIn> */}
          {/* {
            state && state.data && state.data.split(" ").map(word => {
              return <BounceIn delay={Math.random()} {...toggle}>
                {word}
              </BounceIn>
            })
          } */}
        <BounceIn delay={.3} {...toggle}>
         <span>
            &ldquo;{state.data}&rdquo;
         </span>
        </BounceIn>
        <button className="button" 
          onClick={() => toggleQuote()}>
            Get Quote
        </button>
      </>
  )
}