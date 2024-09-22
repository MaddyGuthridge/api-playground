/** A tile in the game world */
export type Tile = {
  /** Color representing the tile */
  color: string
  /**
   * Path to sprite to use when rendering tile. If `null`, only the background
   * color is rendered.
   */
  sprite: string | null
  /** Whether players can walk on the tile */
  walkable: boolean
}
