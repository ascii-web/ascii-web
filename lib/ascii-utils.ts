export function createAsciiAnimation(text: string): string {
  const frames = [
    `
┌${"─".repeat(text.length + 2)}┐
│ ${text} │
└${"─".repeat(text.length + 2)}┘`,
    `
╔${"═".repeat(text.length + 2)}╗
║ ${text} ║
╚${"═".repeat(text.length + 2)}╝`,
    `
▛${"▀".repeat(text.length + 2)}▜
▌ ${text} ▐
▙${"▄".repeat(text.length + 2)}▟`,
  ];

  return frames.join("\n\n");
}
