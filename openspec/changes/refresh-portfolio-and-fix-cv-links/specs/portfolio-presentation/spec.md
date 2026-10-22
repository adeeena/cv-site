# Spec Delta

## Purpose

Presents the owner's engineering leadership and community work in a coherent, responsive portfolio that helps visitors understand the role and scan selected projects.

## ADDED Requirements

### Requirement: Profile copy accurately presents the owner's role and work
The portfolio SHALL identify the owner as a Lead Software Engineer wherever the current role is presented and use concise first-person copy to describe professional and community work.

#### Scenario: Consistent professional role
- **WHEN** a visitor reads the home or Bio page
- **THEN** each displayed current-role title identifies the owner as a Lead Software Engineer and does not identify the owner as a Senior Software Engineer

#### Scenario: Clear profile language
- **WHEN** a visitor reads the Bio profile
- **THEN** it describes the owner's professional and community contributions in clear first-person language without the phrase "Creative Mind Owner"

### Requirement: Selected work is prominent and scannable
The home page SHALL present selected work prominently after the introductory profile, with concise project summaries and a clear destination for each project.

#### Scenario: Visitor scans selected work
- **WHEN** a visitor moves from the home-page introduction to its selected-work section
- **THEN** each project is represented by its title, a short description, and a working project link

### Requirement: Portfolio pages use a coherent visual hierarchy
The portfolio SHALL retain a cool, museum-like Bauhaus character with a neutral base, cobalt as its single accent color, and consistent typography and spacing across responsive layouts.

#### Scenario: Desktop presentation
- **WHEN** a visitor views the portfolio at a desktop viewport
- **THEN** headings, body copy, links, and project summaries have a clear hierarchy without competing accent colors or repeated heavy decoration

#### Scenario: Narrow presentation
- **WHEN** a visitor views the portfolio at a narrow viewport
- **THEN** navigation, profile content, project summaries, and actions remain readable and do not overlap or overflow

### Requirement: Bio portrait uses the owner's GitHub profile photo
The Bio page SHALL display the public profile avatar associated with the owner's `amurancsikHIP` GitHub account as the owner's portrait.

#### Scenario: Visitor views the Bio portrait
- **WHEN** a visitor views the Bio page
- **THEN** the portrait is the profile photo associated with the `amurancsikHIP` GitHub account rather than the previously used portrait

### Requirement: Employer links lead to Capsuletech
The Philips / Capsuletech employer links on the Home and Bio pages SHALL navigate to `https://capsuletech.com`.

#### Scenario: Visitor follows an employer link
- **WHEN** a visitor activates the Philips / Capsuletech link on either page
- **THEN** the browser navigates to `https://capsuletech.com`