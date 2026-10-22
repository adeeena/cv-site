# Tasks

## 1. Publish CV Documents

- [x] 1.1 Configure Angular to publish the canonical `docs/cv-*.pdf` files at the build output root, then run a production build and verify both non-empty PDF files are emitted at the expected paths.
- [x] 1.2 Confirm the Bio page exposes clearly labeled English and French links to the matching public PDF URLs by inspecting the rendered page and link targets.

## 2. Refine Portfolio Content and Presentation

- [x] 2.1 Update Home and Bio role copy to "Lead Software Engineer" and tighten the first-person profile while retaining engineering and community work; verify both pages show the agreed title and no stale "Senior Software Engineer" or "Creative Mind Owner" copy remains.
- [x] 2.2 Set the Philips / Capsuletech links on Home and Bio to `https://capsuletech.com`; verify both rendered link targets use the requested URL.
- [x] 2.3 Add a local copy of the public `amurancsikHIP` GitHub avatar under `source/src/assets/images/` and use it as the Bio portrait; verify the rendered portrait loads from the local asset and has accurate alternative text.
- [x] 2.4 Refine shared tokens, navigation, Home and Bio layouts, heading hierarchy, and viewport metadata for the neutral-and-cobalt Bauhaus direction; inspect desktop and narrow browser views for readable text, clear hierarchy, and no overlap or horizontal overflow.

## 3. Verify Production Integration

- [ ] 3.1 Deploy the production build and check both public CV URLs; verify each returns `application/pdf` with the correct document rather than `text/html` or the SPA fallback.