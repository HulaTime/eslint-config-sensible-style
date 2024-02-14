## Installation

Install the `eslint-config-senseible-style` package and the required peer dependencies
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

