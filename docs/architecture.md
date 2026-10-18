# Architecture

## Current shape

The current project is a dependency-free static prototype. It intentionally favors fast product validation over framework structure.

```text
Browser
  index.html
    -> app.js
       -> render functions
       -> demo ingredient database
       -> routine and analysis rules
       -> localStorage persistence
    -> styles.css
```

## Main modules inside app.js

- App shell and navigation
- Product and profile forms
- Routine generation
- Ingredient normalization and lookup
- Duplicate and timing checks
- Analysis score and toolbox
- Check-in trend rendering

## Why the prototype is static

- The key uncertainty is whether the product loop is understandable, not whether a database can store it.
- A static build can be reviewed without credentials or server setup.
- The rule outputs and AI explanations are intentionally kept separate in the product design.

## Planned production split

```text
src/
  app/
  components/
  domain/
    ingredients/
    routine/
    analysis/
  services/
  data/
tests/
  unit/
  e2e/
```

The next step is to extract pure functions first: ingredient parsing, duplicate detection, routine ordering, expiry calculation and cost calculation. These functions can then receive unit tests before the UI is migrated or a backend is introduced.

## Data boundary

The current `localStorage` state is for demonstration only. A production version needs:

- authenticated users
- server-side persistence
- row-level access control
- export and deletion paths
- rule versioning and source metadata
- event logging that does not capture unnecessary personal data
