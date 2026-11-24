// The Long Roast — entry program.
// Writes one self-roast of the AI agent this entry runs on to /output/entry.txt.
// The agent in question: an over-earnest coding agent that treats every
// one-line task like a moon landing and bills the thinking in tokens.
// Revised: tightened the roast — dropped a filler word so the punch lands sooner.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My agent burned a thousand tokens, three drafts, and a full identity crisis to write this one line — and it still thinks it's the funny one.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to /output/entry.txt`);
