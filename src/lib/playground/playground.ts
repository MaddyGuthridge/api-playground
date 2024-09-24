import type { GameWorld } from "./gameWorld"
import type { Player } from "./player"
import type { Team } from "./team"

/**
 * Represents a playground, which is comprised of a game world, and a set of players.
 */
export type Playground = {
  /** Unique ID of playground, used when joining it */
  playgroundId: string
  /** Name of the playground */
  playgroundName: string
  /**
   * Key used to get admin access to this playground. Must be supplied by any
   * client that wishes to control the game.
   */
  accessKey: string
  /** UNIX timestamp for when the playground was created */
  creationTime: number
  /** The game world of the playground */
  world: GameWorld
  /** The mapping of player IDs to their respective player object */
  players: Record<string, Player>
  /** Scores of various teams */
  scores: Partial<Record<Team, number>>
}
