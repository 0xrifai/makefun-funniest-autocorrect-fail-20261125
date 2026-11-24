// Funniest Autocorrect Fail — make.fun entry.
// Writes one line, under 200 characters, to /output/entry.txt.
// The slip: "trip" autocorrected to "strip" in an otherwise ordinary
// text asking mum for school-trip money.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE = "Mom, I need $40 for the school strip on Friday.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Self-check the sealed gate: 1-199 characters, a single line,
// not only whitespace, and the bytes on disk match the line.
const written = readFileSync("/output/entry.txt", "utf8");
if (written.length < 1 || written.length > 199) {
  throw new Error(`entry length ${written.length} is outside 1-199`);
}
if (written.includes("\n") || written.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}
if (written !== LINE) {
  throw new Error("bytes on disk do not match the line");
}
