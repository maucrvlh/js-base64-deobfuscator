<h1 align="center">Base64 string deobfuscator</h1>

---

:fire: Deobfuscate base 64 obfuscated strings


## Installation
```
yarn add js-base64-deobfuscator
```
## Quickstart
```javascript
import * as b64deobfuscator from 'js-base64-deobfuscator';

let str = 'eyBhOiAxLCBiOiyyLCBjOiAzIH0AL';
let deobfuscatedStr = b64deobfuscator.deobfuscate(str); // { a: 1, b: 2, c: 3 }
```
Obfuscate base64 strings w/ <a href="https://github.com/maucrvlh/js-base64-obfuscator/">js-base64-obfuscator</a>

## License
MIT
