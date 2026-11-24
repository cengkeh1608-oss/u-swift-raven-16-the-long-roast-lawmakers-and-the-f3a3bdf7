import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Winner D8 (24/25, 14 drafts): double turn — "banned the future" builds the
// lawmakers' authority, "could not convert to PDF" undercuts it, and the
// punch lands on the last words with the specific, unexpected detail that
// the official record is a fax. Shortest of the three 24/25 drafts (128
// chars), which wins the size tie-break.
const TEXT =
  "They banned the future in a bill they could not convert to PDF, so the official record of the AI Regulation Act is a fax.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
