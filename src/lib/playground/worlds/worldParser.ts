import type { GameWorld } from '../gameWorld';
import type { Tile } from '../tile';
export type { GameWorld } from '../gameWorld';

function charToTile(c: string): Tile {
  switch (c) {
    case '-':
      return {
        color: 'green',
        walkable: true,
        sprite: null,
      };
    case '+':
      return {
        color: 'yellow',
        walkable: true,
        sprite: null,
      };
    case ',':
      return {
        color: 'blue',
        walkable: true,
        sprite: null,
      };
    case '.':
      return {
        color: 'gray',
        walkable: true,
        sprite: null,
      };
    case '^':
      return {
        color: 'white',
        walkable: true,
        sprite: null,
      };
    case '#':
      return {
        color: 'red',
        walkable: false,
        sprite: null,
      };
    default:
      throw Error('Invalid tile');
  }
}

export default function parseWorld(worldTxt: string): GameWorld {
  return worldTxt
    .trim()
    .split('\n')
    .map(line => [...line].map(c => charToTile(c)));
}
