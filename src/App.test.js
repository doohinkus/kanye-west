import '@testing-library/jest-dom'
import React from 'react'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { setupServer } from 'msw/node'
import { rest } from 'msw'

import App from './App';
  
describe('App', () => {
  it('should display quote onload', async () => {
    render(<App />)
    // await userEvent.click(screen.getByTestId(/getQuote/i));
    expect(await screen.findByText(/some weird text/)).toBeInTheDocument()
  })
  it('should display quote when button is clicked', async () => {
    render(<App />)
    const server = setupServer(
      rest.get('https://api.kanye.rest', (req, res, ctx) => {
        return res(
          ctx.text("some clicked text"),
          );
        }),
        );
    server.listen();
    await userEvent.click(screen.getByTestId(/getQuote/i));
    expect(await screen.findByText(/some clicked text/)).toBeInTheDocument();
    server.close();
  })
})