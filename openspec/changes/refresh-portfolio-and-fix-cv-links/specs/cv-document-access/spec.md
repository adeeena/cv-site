# Spec Delta

## Purpose

Enables visitors to access the owner's English and French CV documents directly from the public portfolio as valid PDF files.

## ADDED Requirements

### Requirement: Visitors can access each language edition of the CV
The portfolio SHALL provide clearly labeled English and French CV links, each resolving to its corresponding PDF document in production.

#### Scenario: English CV link
- **WHEN** a visitor activates the English CV link
- **THEN** the production response contains the English CV as a PDF and not the portfolio's HTML application fallback

#### Scenario: French CV link
- **WHEN** a visitor activates the French CV link
- **THEN** the production response contains the French CV as a PDF and not the portfolio's HTML application fallback