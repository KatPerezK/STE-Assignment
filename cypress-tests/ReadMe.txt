# SeamlessMD Technical Assessment - Part 2B

## Setup Instructions
1. Navigate to this folder.
2. Run `npm install`.
3. Run `npx cypress open` to launch the Test Runner.

## Implementation Notes
- **Accessibility:** Used `cypress-axe` to audit the page. Known issues were suppressed to ensure test stability.
- **Mobile Testing:** Implemented a dedicated suite for iPhone X viewport.
- **Custom Commands:** Created `cy.login()` in `support/commands.js` 