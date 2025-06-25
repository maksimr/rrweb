---
"@studio/rrweb-all": major
"@studio/rrweb-packer": major
"@studio/rrweb-plugin-canvas-webrtc-record": major
"@studio/rrweb-plugin-canvas-webrtc-replay": major
"@studio/rrweb-plugin-console-record": major
"@studio/rrweb-plugin-console-replay": major
"@studio/rrweb-plugin-sequential-id-record": major
"@studio/rrweb-plugin-sequential-id-replay": major
"@studio/rrweb-record": major
"@studio/rrweb-replay": major
"@studio/rrdom": major
"@studio/rrdom-nodejs": major
"@studio/rrweb": major
"@studio/rrweb-player": major
"@studio/rrweb-snapshot": major
"@studio/rrweb-types": major
---

Distributed files have new filenames, paths and extensions. **Important: If you reference distributed files or types directly, you might have to update your paths/filenames. E.g. you import from `rrweb/typings/...` or `rrdom/es`. However you run `import rrweb from '@studio/rrweb'` you won't notice a difference with this change.** If you include rrweb files directly in a script tag, you might have to update that path to include a the `.umd.cjs` files instead. All `.js` files now use ES modules which can be used in modern browsers, node.js and bundlers that support ES modules. All npm packages now also ship `.cjs` and `.umd.cjs` files. The `.umd.cjs` files are CommonJS modules that bundle all files together to make it easy to ship one file to browser environments (similar to the previous `.js` files). The `.cjs` files are CommonJS modules that can be used in older Node.js environments. Types should be better defined in `package.json` and if you need specific types they might be exported from new packages (for example `PlayerMachineState` and `SpeedMachineState` are now exported from `@studio/rrweb-replay`). Check the `package.json`'s `main` and `exports` field for the available files.
