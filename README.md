## Installation

Install the `eslint-config-senseible-style` package and the required peer dependencies
```
npm install --save-dev eslint-config-sensible-style

// peer dependencies
npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint@7
```

Create file `.eslintrc.js` with the following ocntent
```javascript
module.exports = {
  extends: ['eslint-config-sensible-style'],
};
```

