import type { Playground } from "./playground/playground";

/** Current record of playground IDs to playgrounds */
export const playgrounds: Record<string, Playground> = {};

/** Returns current UNIX timestamp */
export function unixTime(): number {
  return Math.floor(Date.now() / 1000);
}
