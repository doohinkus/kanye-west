
import {useState, Fragment} from 'react';

export function Reload(){
    const [reload, setReload] = useState({reload: false});
    function reloadQuote(){
        setReload({reload: !reload.reload});
    }
    return (
        <>
            <button onClick={() => reloadQuote()}>
                Get Quote
            </button>
            {reload.reload.toString()}
        </>
    );
}

