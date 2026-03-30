# Logos and Icons Directory

Place your smaller vector graphics (`.svg`) or partner logos (`.png`, `.jpg`) here if you wish to import and bundle them.

To use an asset from this folder in `App.tsx`, you must import it at the top of the file:
```ts
import sponsorLogo from './assets/media/logos/sponsor.png';

// Inside your component:
<img src={sponsorLogo} alt="Sponsor" />
```
