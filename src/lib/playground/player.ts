import type { Team } from "./team"

/** Represents a player in the playground */
export type Player = {
  /** Unique ID of the player */
  playerId: string
  /** Name of the player */
  name: string
  /** Name  */
  team: Team
  /** Position of the player in the form [x, y] */
  position: [number, number]
}
