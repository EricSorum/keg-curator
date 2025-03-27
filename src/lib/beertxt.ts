import fs from 'fs';

export const beertxt = fs.readFileSync('./beerlist.txt', 'utf-8');
