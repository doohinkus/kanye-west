import '@testing-library/jest-dom'
import React from 'react'
import { renderHook, act } from '@testing-library/react-hooks'
import {useFetch} from './useFetch';


describe('App', () => {
    it('should display quote onload', async () => {
        const {result} = renderHook(() => useFetch());
        console.log(result.current)
        act(() => {
            result.current[1](true);
        })
        expect(typeof result.current[1]).toBe('function');
        expect(result.current[0].toggle).toBe(true);
    });
});