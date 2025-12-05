# Change: Update repository data with actual repos

## Why
The `scripts/update.js` currently contains placeholder data from b0o's repositories. This needs to be replaced with Conner Ohnesorge's actual repositories organized by domain.

## What Changes
- Replace all repository entries in `scripts/update.js` with actual repos from the `output` file
- Organize repos into domain-based sections: Go Libraries, Nix Flakes, Hardware/Embedded, Editor/Neovim, AI/ML, CLI Tools, Web, and Other
- Update user references from `b0o` to `connerohnesorge`
- Update config base repo to `connerohnesorge/connerohnesorge`
- Select ~20-25 featured repos that best represent the portfolio

## Impact
- Affected code: `scripts/update.js`
- Affected assets: `assets/` directory will be regenerated with new SVGs
- Affected output: `README.md` will show actual repositories
