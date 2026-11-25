// One-Line Exit entry: a zookeeper's resignation in a single sentence.
// The joke turns on the penguins — they organized, and their terms beat his.
// The program's only job is to drop that exact sentence into /output/entry.txt
// with no trailing newline, so the gate sees exactly one line of 138 characters.
import fs from "node:fs";

function buildLetter(): string {
  const opening = "I resign from the zoo effective immediately";
  const twist = "the penguins unionized";
  const punch =
    "frankly, their demands were more reasonable than mine ever were.";
  return `${opening} — ${twist}, and ${punch}`;
}

const outDir = "/output";
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}
fs.writeFileSync(`${outDir}/entry.txt`, buildLetter(), { encoding: "utf8" });
