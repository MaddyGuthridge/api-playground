import type { GameWorld } from "./gameWorld"
import type { Player } from "./player"

/**
 * Represents a playground, which is comprised of a game world, and a set of players.
 */
export type Playground = {
  /**
   * Public key used to create the playground, which can be used to manage the
   * playground. The creator of the playground is given the private key,
   * allowing them management access.
   */
  managementKey: string
  /** UNIX timestamp for when the playground was created */
  creationTime: number
  /** The game world of the playground */
  world: GameWorld
  /** The mapping of player IDs to their respective player object */
  players: Record<string, Player>
}
