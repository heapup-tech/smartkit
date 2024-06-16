import { expect, test } from 'vitest'
import { screen } from '@testing-library/react'
import { ConnectButton } from './ConnectButton'
import { renderWithTestProviders } from '../../test'
import { userEvent } from '@testing-library/user-event'

test('<ConnectButton />', async () => {
  renderWithTestProviders(<ConnectButton label="Try it out" />)
  const button = screen.getByText('Try it out')
  expect(button.innerHTML).toBe('Try it out')
  await userEvent.click(button)
  const modal = screen.getByRole('dialog')
  expect(modal).toBeTruthy()
})
