# eslint-config-sensible-style

This config is configured primarily for typescript projects. It should still work for javascript files as well without
issues but there could be some conflicts in the rules. At some point I will probably create a separate config
specifically for pure js rather than trying to handle them both from the same config.

## Installation

Install the `eslint-config-senseible-style` package and the required peer dependencies

You can use your choice of package manager `npm/yarn/pnpm` but I like pnpm.
```
pnpm install --save-dev eslint-config-sensible-style

pnpm install --save-dev \
    eslint \
    @typescript-eslint/eslint-plugin \
    @typescript-eslint/parser \
    eslint-import-resolver-typescript \
    eslint-plugin-import
```

Create file `.eslintrc.js` with the following content

```javascript
module.exports = {
  extends: ['eslint-config-sensible-style'],
};
```

