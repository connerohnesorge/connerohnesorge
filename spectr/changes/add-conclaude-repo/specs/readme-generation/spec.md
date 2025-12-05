## ADDED Requirements

### Requirement: Conclaude Repository Entry
The system SHALL include the conclaude repository in the CLI Tools section of the README.

#### Scenario: Repository entry in data array
- GIVEN the data array in scripts/update.js
- WHEN the CLI Tools section is rendered
- THEN it SHALL include an entry for conclaude with user "connerohnesorge", repo "conclaude", and description "The guardrails your Claude Code sessions need"

#### Scenario: README generation with conclaude
- GIVEN the conclaude repository entry exists in the data array
- WHEN the update script runs
- THEN the README SHALL display a repository card for conclaude in the CLI Tools section with both light and dark mode SVG variants
