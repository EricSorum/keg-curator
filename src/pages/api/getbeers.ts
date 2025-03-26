import { Beer } from '@/lib/beers';

export async function getBeers(): Promise<Beer[]> {
    const response = await fetch('/api/beers');
    if (!response.ok) {
        return [];
    }
    return response.json();
} 