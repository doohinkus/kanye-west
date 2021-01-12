import '@testing-library/jest-dom'
import React from 'react'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import {Quote} from "./components/Quote";

  
  test('shows api quote', async () => {
  
    act(() => {
        render(<Quote />);
        userEvent.click(screen.getByTestId(/getQuote/i));
    });
    const quote = await screen.getByTestId(/quote/)
    // expect(quote).toHaveTextContent("\“\”")
    expect(quote).toHaveTextContent(/some weird text/);

  });