@AGENTS.md

## Design system

- Same system as the app (`../client`) and the mobile app: `../design-ref/CallPilot Web - Dashboards.html`. The tokens in `app/globals.css` mirror `../client/app/globals.css`; change both together. The older token names (ink, panel, fg-muted, accent-soft…) point at the new values.
- Light by default, following the device until someone uses the toggle (`cp-theme`, applied before paint by `app/layout.tsx`). Use tokens, never raw colours, so both themes work. `app/opengraph-image.tsx` can't read CSS variables and mirrors the dark theme by hand.
- Icons are Material Symbols via `components/icon.tsx`, subset to `ICON_NAMES`.
- Keep CTAs as plain anchors with `data-cta-location`: `instrumentation-client.ts` relies on them for analytics.
