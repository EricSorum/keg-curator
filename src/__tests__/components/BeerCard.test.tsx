import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import BeerCard from '@/components/cards/beercard'
import Beer from '@/models/Beer'

describe('BeerCard', () => {
  const mockBeer: Beer = {
    name: 'Test IPA',
    brewery: 'Test Brewery',
    style: 'India Pale Ale',
    origin: 'Craft',
    region: 'Minnesota',
    value: 'Premium',
    cuisine: ['American'],
    score: 0
  }

  it('should render beer information correctly', () => {
    render(<BeerCard index={0} beer={mockBeer} />)
    
    expect(screen.getByText('Test IPA')).toBeInTheDocument()
    expect(screen.getByText('Test Brewery')).toBeInTheDocument()
    expect(screen.getByText('India Pale Ale')).toBeInTheDocument()
  })

  it('should handle brewery names with special characters', () => {
    const specialBeer = {
      ...mockBeer,
      brewery: 'Test & Co. Brewery!'
    }
    
    render(<BeerCard index={0} beer={specialBeer} />)
  })

  it('should render with correct styling classes', () => {
    const { container } = render(<BeerCard index={0} beer={mockBeer} />)
    
    const card = container.querySelector('.bg-white')
    expect(card).toBeInTheDocument()
    expect(card).toHaveClass('rounded-[20%]')
  })
})
