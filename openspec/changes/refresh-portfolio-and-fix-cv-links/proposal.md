# Proposal

## Why

The current portfolio's role messaging and visual hierarchy feel inconsistent, with multiple accent colors and decorative treatments competing for attention. Its English and French CV links also resolve to the app's HTML fallback in production instead of PDF documents, so the core portfolio experience and an important professional action both need attention.

## What Changes

- Refine the portfolio into a balanced engineering and community-project presentation, with selected work prominent and concise project cards.
- Retain a cool, museum-like Bauhaus character while using a neutral base and cobalt as the single accent, with clearer typography, spacing, and decorative hierarchy.
- Use "Lead Software Engineer" consistently and improve awkward or vague profile copy while preserving the first-person voice and community work.
- Replace the current Bio portrait with a locally served copy of the public GitHub profile photo for `amurancsikHIP`.
- Point the Philips / Capsuletech employer links to `https://capsuletech.com`.
- Ensure the English and French CV links serve their respective PDF documents in production.

## Capabilities

### New Capabilities
- `portfolio-presentation`: Present the owner's role, profile photo, and selected engineering and community work with a coherent responsive visual hierarchy.
- `cv-document-access`: Provide working public links to English and French CV PDFs.

### Modified Capabilities

## Impact

- Angular home and Bio page content and styles, plus shared typography, color, and responsive layout rules.
- Home and Bio employer-link destinations and the bundled Bio portrait image.
- Bio portrait asset under `source/src/assets/images/`, sourced from the public GitHub avatar.
- Angular production asset output and the deployed static-hosting behavior for the CV documents.
- Existing source documents at `docs/cv-english.pdf` and `docs/cv-french.pdf`.