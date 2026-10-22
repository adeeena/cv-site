# Design

## Context

See proposal.md for motivation and specs for the user-visible contract. The Angular workspace is under `source/`; shared tokens and typography are in `source/src/styles.scss`, with page-specific layout in the Home and Bio component styles. The English and French PDFs remain in the repository-level `docs/` directory. Production currently returns the SPA index for both PDF URLs.

## Goals / Non-Goals

**Goals:**
- Make the shared visual language deliberate across Home, Bio, and navigation while preserving the museum-like Bauhaus character.
- Keep content readable across desktop and narrow viewports, with selected work easy to scan.
- Use the owner's GitHub profile avatar as the Bio portrait without adding a runtime dependency on GitHub.
- Direct Home and Bio employer links to the requested Capsuletech destination.
- Make the existing PDFs available at their current public URLs without maintaining duplicate source documents.

**Non-Goals:**
- Add a new framework, visual library, or content-management system.
- Replace the portfolio with a different brand direction or remove the community-project content.
- Rewrite or redesign the CV documents themselves.

## Decisions

### Use one shared visual system

Use the global style tokens as the source of truth for a neutral canvas, dark text, and cobalt as the only accent. Retain the Bauhaus influence through geometric composition and deliberate editorial typography, not through repeated primary-color fills, heavy borders, and hard shadows. Reduce the global all-caps/italic heading treatment so display typography marks hierarchy rather than making every heading compete. Keep page-specific styling focused on layout and content roles.

**Alternative considered:** Keep the red, yellow, and blue palette and assign each a role. This preserves the existing color range but does not match the user's preference for one signature accent.

### Keep project cards compact and put selected work near the top

Keep the home-page introduction first, followed immediately by selected work. Each card stays concise: title, short description, and destination. Preserve the mix of engineering, community, and creative work rather than turning every item into a detailed case study.

**Alternative considered:** Expand a small number of projects into case studies. This would add depth but conflicts with the chosen short-gallery format.

### Bundle the GitHub avatar as a local portrait asset

Download the public avatar at `https://avatars.githubusercontent.com/u/233928220?v=4` into `source/src/assets/images/` and update the Bio page to reference that local asset. Keep the portrait framed consistently with the revised neutral visual system. A local snapshot avoids a third-party request on every page view and ensures the selected photo does not change unexpectedly if the profile avatar is later updated.

**Alternative considered:** Reference the GitHub-hosted image directly. This avoids storing a copy but makes page rendering depend on an external host and tracks future avatar changes automatically.

### Update both employer link destinations

Keep the visible "Philips / Capsuletech" label and set its Home and Bio link target to `https://capsuletech.com`. No new link abstraction is needed for the two existing profile links.

**Alternative considered:** Link to Philips healthcare, the current destination. The user specifically requested Capsuletech's site.

### Keep the PDFs in `docs/` and publish them through Angular assets

Add an explicit Angular asset pattern whose input is `../docs`, glob is `cv-*.pdf`, and output is the build root. The installed application builder supports object asset patterns and rejects output paths outside the build output; its string-path shorthand instead requires the source path to be inside the workspace. This keeps the PDFs in one canonical location while emitting both documents at the URLs used by the Bio page.

**Alternative considered:** Copy the PDFs into `source/src/assets`. That is simpler to express with the current asset list but creates duplicate binary files that can drift from `docs/`.

### Align responsive behavior with the viewport

Use the existing component breakpoints and improve layout rules in the owning page styles. Update the viewport declaration to include `width=device-width` so mobile layout uses the device width rather than a browser default layout width.

## Risks / Trade-offs

- [The palette and typography could still feel over-decorated] -> Review the same pages at desktop and narrow widths; keep cobalt as the only accent and remove redundant borders/shadows rather than adding more tokens.
- [The static host could still rewrite missing document paths to the SPA] -> Verify the production build contains both PDFs at its root, then verify both deployed URLs return `application/pdf` and not `text/html`.
- [A repository-relative asset input could behave differently in the actual build] -> Run a production Angular build and inspect the emitted files before deployment; preserve `docs/` as the source of truth.
- [The GitHub avatar can change after the local copy is captured] -> Treat the bundled portrait as an intentional snapshot and replace it only when the owner requests an update.

## Migration Plan

1. Add the GitHub avatar to local image assets and update the Bio portrait reference; update the Home/Bio employer links and profile copy; refine shared visual tokens and layouts, and add the responsive viewport width.
2. Configure the Angular build to emit both existing PDFs at the root of the output and build in production mode.
3. Confirm both files exist in the production output and return PDF content from the deployed English and French CV URLs.
4. Deploy the build. If layout or document serving regresses, roll back the corresponding style, asset, or hosting change independently; no data migration is required.

## Open Questions

None. The exact copy can be refined during implementation while keeping the role, first-person voice, and community-work requirements in the specs.