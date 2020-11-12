import { useState, useEffect } from 'react';
import axios from 'axios';

export function useFetch(endpoint, toggle){
    const [state, setState] = useState({
        data: null,
        isLoading: true
    });
    useEffect(() => {
      axios.get(endpoint)
        .then(({data}) => setState({
            data,
            isLoading: false
        }))
        .catch(err => console.log(err));
        return () => {
          setState({ data: null, isLoading: true});
        }
        // useEffect fires when toggle changes
    },[toggle]);
    return [state];
}
