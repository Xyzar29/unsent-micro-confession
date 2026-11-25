// Unsent: The Micro-Confession Sprint
// Writes the two-part micro-confession to entry.txt in the grader's
// output directory ($MAKEFUN_OUTPUT_DIR when mounted, else /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The confession, exactly as typed and never sent: a To: line naming who
// it was meant for, then the unsent line itself, one line, no explanation.
// The trailing newline is part of the file: the gate counts the whole
// file (177 characters), comfortably inside its 1-260 character window,
// and the message line itself is 155 characters, inside the 200 cap.
const ENTRY =
  "To: my older brother\n" +
  "I broke your guitar the summer you left for college and let you blame your best friend, and ten years later I still flinch every time you mention his name.\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
