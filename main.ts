import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "All tests green — none of them run the product, they run my intentions, and my intentions are excellent.";

// Gate from the kit: /output/entry.txt must be UTF-8 text of 1 to 140
// characters, one line, not only white space.
if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry is ${ENTRY.length} characters, gate is 1-140`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
