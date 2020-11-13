import {Fragment} from 'react';
import "./Kanye.css";
import {FadeIn} from './FadeIn';
import kanyeImage from '../images/kanye-west.png';


export function Kanye({toggle}){
    const kanyeFace = <img src={kanyeImage} className="kanye"/>; 
    // filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.5));
    return <FadeIn 
              props={
                {
                  from: { filter: 'saturate(10%)'},
                  to: { filter: 'saturate(100%)'},
                  delay: 100,
                  reset: true
                }
              }
              
              component={kanyeFace}
            />;
     
}