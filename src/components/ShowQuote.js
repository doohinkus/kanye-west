import {Fragment} from 'react';
import {FadeIn} from './FadeIn';

export function ShowQuote({isLoading, data}){
    const quote = (
    <FadeIn 
        props={
          {
            from: { opacity: 0},
            to: {opacity: 1},
            delay: 100
          }
        }
        component={<span>
            &ldquo;{data}&rdquo;
         </span>}
      />
        
    );
    const loading = (<span>Loading...</span>);
    return <>
      {isLoading ? loading : quote }
    </>;
}