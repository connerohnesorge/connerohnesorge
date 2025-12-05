# Change: Add conclaude repository to update.js

## Why
The conclaude repository (https://github.com/connerohnesorge/conclaude) is a notable CLI tool that provides guardrails for Claude Code sessions. It should be featured in the GitHub profile README to showcase this Rust-based utility alongside other CLI tools.

## What Changes
- Add conclaude repository entry to the "CLI Tools" section in `scripts/update.js`
- Include appropriate description: "The guardrails your Claude Code sessions need"
- Run update.js to regenerate README.md with the new repository card

## Impact
- Affected spec: `readme-generation` capability
- Affected code: `scripts/update.js` (data array, CLI Tools section)
- Affected output: `README.md` will include conclaude repository card
- Affected assets: `assets/` directory will contain new SVG for conclaude-conclaude-{light,dark}.svg
