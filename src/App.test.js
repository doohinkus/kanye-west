import '@testing-library/jest-dom'
import React from 'react'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App';
  
describe('App', () => {
  it('should display quote', async () => {
    render(<App />)

    await userEvent.click(screen.getByTestId(/getQuote/i));
    expect(await screen.findByText(/some weird text/)).toBeInTheDocument()
  })
})