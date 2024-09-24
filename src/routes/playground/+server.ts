import { json } from '@sveltejs/kit';
import { nanoid } from 'nanoid';
import { playgrounds, unixTime } from '$lib';
import worlds from '$lib/playground/worlds/index.js';

/** Generate an ID for the playground */
function makeId(length: number): string {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export async function POST({ request }) {
  const { playgroundName } = await request.json();

  // Generate a random 6-char ID for the playground
  const playgroundId = makeId(6);

  const accessKey = nanoid();

  playgrounds[playgroundId] = {
    playgroundId,
    playgroundName,
    accessKey,
    creationTime: unixTime(),
    world: worlds.example,
    players: {},
    scores: {},
  };

  return json({ playgroundId, accessKey }, { status: 200 });
}
