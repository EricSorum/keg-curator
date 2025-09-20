import { describe, it, expect } from 'vitest'
import sortMenu from '@/lib/sortMenu'
import { Beer, FormResultsClass } from '@/lib/beers'

describe('sortMenu', () => {
  const mockBeers: Beer[] = [
    {
      name: 'Beer 1',
      brewery: 'Brewery 1',
      style: 'IPA',
      origin: 'Craft',
      region: 'Minnesota',
      value: 'Premium',
      cuisine: ['American'],
      score: 0
    },
    {
      name: 'Beer 2',
      brewery: 'Brewery 2',
      style: 'Lager',
      origin: 'Macro',
      region: 'California',
      value: 'Standard',
      cuisine: ['Italian'],
      score: 0
    },
    {
      name: 'Beer 3',
      brewery: 'Brewery 3',
      style: 'Stout',
      origin: 'Craft',
      region: 'Minnesota',
      value: 'Premium',
      cuisine: ['American'],
      score: 0
    }
  ]

  const mockFormResults: FormResultsClass = {
    businessName: 'Test Restaurant',
    numberOfHandles: 2,
    minnesotaOnly: true,
    craftOnly: true,
    fanciness: 30,
    chosenCuisine: 'American'
  }

  it('should return the correct number of beers', () => {
    const result = sortMenu(mockFormResults, mockBeers)
    expect(result).toHaveLength(2)
  })

  it('should not modify the original beer list', () => {
    const originalBeers = [...mockBeers]
    sortMenu(mockFormResults, mockBeers)
    expect(mockBeers).toEqual(originalBeers)
  })

  it('should return beers with scores assigned', () => {
    const result = sortMenu(mockFormResults, mockBeers)
    result.forEach(beer => {
      expect(typeof beer.score).toBe('number')
    })
  })

  it('should prioritize higher-scoring beers', () => {
    const result = sortMenu(mockFormResults, mockBeers)
    
    // With minnesotaOnly and craftOnly true, and American cuisine,
    // Minnesota craft beers should score higher
    const minnesotaCraftBeers = result.filter(beer => 
      beer.region === 'Minnesota' && beer.origin === 'Craft'
    )
    
    expect(minnesotaCraftBeers.length).toBeGreaterThan(0)
  })
})
