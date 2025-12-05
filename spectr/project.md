# connerohnesorge Context

## Purpose
GitHub Profile README Generator - a special repository (github.com/connerohnesorge/connerohnesorge) that auto-generates a stylized README showcasing Conner Ohnesorge's repositories with visual repo cards. Runs on a schedule via GitHub Actions to keep stats fresh.

## Tech Stack
- **Runtime**: Node.js (ES Modules)
- **Language**: JavaScript (TypeScript available as dev dependency)
- **Formatter**: dprint (typescript, json, markdown plugins)
- **HTTP Client**: node-fetch
- **CI/CD**: GitHub Actions (scheduled every 30 minutes)
- **External API**: github-readme-stats (Vercel-hosted)

## Project Conventions

### Code Style
- **Semicolons**: Use explicit semicolons (override dprint's ASI setting)
- **Module System**: ES Modules (`"type": "module"` in package.json)
- **Naming**: camelCase for variables/functions, PascalCase for components/types
- **Formatting**: Run `dprint fmt` before committing

### Architecture Patterns
- **Data-driven rendering**: Repository data defined in `scripts/update.js` as a declarative data structure
- **Render functions**: Each card type (repo, user, section) has its own render function
- **Image caching**: SVGs fetched from API are cached locally in `assets/` directory
- **Light/dark mode**: Dual images for GitHub's theme switching (`#gh-dark-mode-only`, `#gh-light-mode-only`)

### Testing Strategy
- **Full test suite**: Unit tests for rendering functions, integration tests for API fetching
- **Test that output matches expected format**: Verify README.md structure
- **Test API response handling**: Mock github-readme-stats responses
- **Verify SVG caching**: Ensure images are correctly saved and referenced

### Git Workflow
- **Branching**: Feature branches for new work, merge via PR
- **Main branch**: Protected, auto-commits from GitHub Actions for README updates
- **Commit messages**: Descriptive, conventional commit style preferred

## Domain Context
Repositories are organized by domain:
- **Nix/NixOS**: Flakes for tools (nordvpn, zen-browser, infisical, skypilot, etc.)
- **Go Libraries**: groq-go, claude-agent-sdk-go, seltabl, semanticrouter-go, hydra-go
- **Hardware/Embedded**: MIPS CPUs, CPRE488 FPGA projects, stereoscopic depth mapping
- **Editor/Neovim**: nvim config, plugins (doppler.nvim, vim-toggle), plugin templates
- **AI/ML**: gpt2, modal-deepseek-ocr, groq integrations
- **CLI Tools**: wrtype, wztype, mcp-zig, sqlcquash, templar, twerge
- **Web**: conneroh.com (personal website), play.ts

## Important Constraints
- **Rate limits**: github-readme-stats API may have rate limits; caching mitigates this
- **GitHub Actions**: Runs every 30 minutes; don't trigger unnecessary commits
- **Image hosting**: SVGs hosted in this repo's `assets/` folder, referenced via raw.githubusercontent.com

## External Dependencies
- **github-readme-stats**: `https://github-readme-stats-eight-topaz-65.vercel.app/api` - generates repo/user stat cards
- **GitHub Actions**: Automated README updates on schedule and push
- **Raw GitHub Content**: Images served from `raw.githubusercontent.com/connerohnesorge/connerohnesorge/main/assets/`
