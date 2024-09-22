# API Playground

A simple multiplayer game to teach [Rest APIs](https://en.wikipedia.org/wiki/REST)
to classes of students.

## How it works

Currently, it doesn't. Once I get it working:

* The class's instructor will display the game world on the classroom's screen.
* The class members can join the playground (game world) and play simple games,
  by controlling their character using the application's REST API.
* More-advanced students can use the game world querying API to query the state
  of the game world and create simple bots to play the games.

## Developing

To develop the application:

### Installing dependencies

```bash
npm install
```

### Running the development server

```bash
npm run dev  # -- --open
```

### Running the test suite

```bash
npm run test
```

### Running the linting

```bash
npm run lint  # -- --fix
```

### Creating a production build

```bash
npm run build
```

You can preview the production build with `npm run preview`.
