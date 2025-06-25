---
"@studio/rrweb-plugin-canvas-webrtc-replay": patch
"@studio/rrweb-plugin-sequential-id-replay": patch
"@studio/rrweb-plugin-console-replay": patch
"@studio/rrweb": patch
---

Export `ReplayPlugin` from rrweb directly. Previously we had to do `import type { ReplayPlugin } from '@studio/rrweb/dist/types';` now we can do `import type { ReplayPlugin } from '@studio/rrweb';`
