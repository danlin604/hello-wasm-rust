import * as wasm from "wasm-game-of-life";

document
  .getElementById('header')
  .innerHTML = wasm.greet();