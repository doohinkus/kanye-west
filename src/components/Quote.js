import {Fragment, useState, useMemo} from 'react';
import {ShowQuote} from './ShowQuote';
import {Kanye} from './Kayne';
import { KanyeMotion } from './KayneMotion';
import { BounceIn } from './BounceIn';
import {useFetch} from '../hooks/useFetch';
import './Quote.css';

export function Quote(){
  const [{quote, toggle}, setToggle] = useFetch();
  return (
      <> 
        <KanyeMotion {...toggle}/>
        <h1>Kanye Says</h1>
        <BounceIn delay={.3} {...toggle}>
         <span data-testid="quote">
            &ldquo;{quote}&rdquo;
         </span>
        </BounceIn>
        <button data-testid="getQuote" className="button" 
          onClick={() => setToggle({toggle: !toggle.toggle})}>
            Get Quote
        </button>
      </>
  )
}