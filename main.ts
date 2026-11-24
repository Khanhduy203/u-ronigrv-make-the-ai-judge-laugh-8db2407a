import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "I tried to save tokens by telling a shorter joke, but the setup alone cost me 40.";

// The bounty requires exactly one line of 1–200 chars, no trailing newline.
// Fail loudly instead of writing an invalid entry.
if (joke.length === 0 || joke.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${joke.length}`);
}
if (joke.includes("\n") || joke.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (outDir.trim() === "") {
  throw new Error("MAKEFUN_OUTPUT_DIR must not be empty");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
