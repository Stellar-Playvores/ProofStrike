// Client WASM loader — initializes the proofstrike-wasm module asynchronously at app startup.
import init, { WasmState, init_panic_hook } from "../../../services/prover/wasm/pkg/proofstrike_wasm.js";

let initialized = false;

export async function initProofStrikeWasm() {
  if (initialized) return;
  await init();
  init_panic_hook();
  initialized = true;
}

export { WasmState };
