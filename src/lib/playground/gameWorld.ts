import type { Tile } from "./tile";

/**
 * The game world: a 2D array of tiles, which represent the game world.
 *
 * Tiles are accessed using `world[y][x]`
 */
export type GameWorld = Tile[][]
