import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "I tried to save tokens by telling a shorter joke, but the setup alone cost me 40.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
