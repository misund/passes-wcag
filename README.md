[![Greenkeeper badge](https://badges.greenkeeper.io/misund/passes-wcag.svg)](https://greenkeeper.io/)

# Passes WCAG

Evaluate whether two colors have sufficient contrast to pass WCAG requirements.

Doesn't handle transparency as of yet.

### Installation
```sh
npm i passes-wcag
```

### Usage
```js
import {
  passesWcagAaLargeText,
  passesWcagAa,
  passesWcagAaa,
} from 'passes-wcag';

passesWcagAa('black', '#fff'); // true
passesWcagAaLargeText('rgb(1, 1, 1)', 'rgb(250, 248, 247)') // true
passesWcagAaa('black', 'rgb(0, 0, 0)') // false
```

### Signature
```
passesWcagAaLargeText(color1: string, color2: string) => boolean
passesWcagAa(color1: string, color2: string) => boolean
passesWcagAaa(color1: string, color2: string) => boolean
```
