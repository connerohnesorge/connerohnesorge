# Readme Generation Specification

## Purpose

TODO: Add purpose description

## Requirements

### Requirement: Repository Data Configuration
The system SHALL maintain repository data in `scripts/update.js` as a declarative data structure with sections organized by domain.

#### Scenario: Domain-based organization
- GIVEN the data array in update.js
- WHEN the script runs
- THEN repositories SHALL be grouped into domain sections: Go Libraries, Nix Flakes, Hardware/Embedded, Editor/Neovim, AI/ML, CLI Tools, Web, and Other

#### Scenario: Repository entry format
- GIVEN a repository entry
- WHEN defining it in the data array
- THEN it SHALL include: kind ("repo"), user ("connerohnesorge"), repo (repository name), and description (brief text)

### Requirement: Config Base Repository
The system SHALL use `connerohnesorge/connerohnesorge` as the base repository for image hosting.

#### Scenario: Image URL generation
- GIVEN the conf.repo.base setting
- WHEN generating cached image URLs
- THEN URLs SHALL point to `raw.githubusercontent.com/connerohnesorge/connerohnesorge/main/assets/`

### Requirement: User Card Display
The system SHALL display a GitHub stats card for the `connerohnesorge` user at the bottom of the README.

#### Scenario: User stats rendering
- GIVEN the user card entry
- WHEN rendering the README
- THEN it SHALL show GitHub statistics for connerohnesorge with both light and dark mode variants

