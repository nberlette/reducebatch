<div align="center">
  <h1 align="center"><code>reduceBatch()</code></h1>

  <p>Perform array reductions in batches, with throttling.</p>
  <p>

![Latest NPM Release](https://badgen.net/npm/v/reducebatch) ![Types: Included](https://badgen.net/npm/types/reducebatch?logo=typescript) ![Contributors](https://badgen.net/github/contributors/nberlette/reducebatch?color=green) ![Issues](https://badgen.net/github/issues/nberlette/reducebatch) ![License](https://badgen.net/github/license/nberlette/reducebatch?color=blue)

  </p><br/>
</div>

## Installation

<details open>
<summary><strong>PNPM</strong> <small>(recommended)</small></summary>

```bash
pnpm install reducebatch
```

</details>
<details>
<summary><strong>Yarn</strong> <small>(also good)</small></summary>

```bash
yarn add reducebatch
```

</details>
<details>
<summary><strong>NPM</strong> <small>(if you must...)</small></summary>

```bash
npm install --save reducebatch
```

</details>

## Usage

This package supports both ES Module and CommonJS (`node`) syntaxes.

### ES Modules

```js
import { reduceBatch, reduceBatchSync } from "reducebatch";
```

##### Treeshakable!

```js
import reduceBatchSync from "reducebatch/sync";
```

### CommonJS

```js
const { reduceBatch, reduceBatchSync } = require("reducebatch");
```

## Examples

```js
// fill an array with 5000 consecutive numeric values
const bigArray = Array.from(Array(5000), (_, i) => i);

reduceBatch(bigArray, (acc, cur) => acc + cur, 0 /* initialVal  */, 100 /* batchSize */, 500 /* rateLimit */).then(
  console.log
);

// ... 12497500
// batchSize: 100 (50 batches of 100)
// rateLimit: 500 (maximum per second)
```

---

## Contributing

One of the most overlooked aspects of the Open Source community is the impact of contributions. Projects (like `reduceBatch`), and their maintainers (like me <small>:wave:</small> ), depend on contributions from other members like yourself.

Furthermore, they're the cornerstone of why our community continues to be such an amazing place to learn, inspire, and create.

Any contributions you make are **greatly appreciated**.

<details open>
<summary><h3 style="display:inline-block">Guidelines</h3></summary>

- [x] Found a bug? Have a feature request? Please [open an issue] and let me know!
- [x] Create a **_dedicated_** PR for each feature/change to the API.
- [x] Please also read through the [Code of Conduct] beforehand.
- [x] Please make sure you check your spelling and grammar.

</details>
<details open>
<summary><h3 style="display:inline-block">Creating a Pull Request</h3></summary>

1. **Fork the project**
2. **Create your feature branch**

```sh
  git checkout -b feature/something-dope
```

3. **Commit your changes**

```bash
  git commit -m 'Some info about what you added...'
```

4. **Push to the Branch**

```bash
  git push -u origin feature/something-dope
```

5. **Open a Pull Request**

```bash
# Using the GitHub CLI
gh pr create --title "[feature]: something dope!"
```

</details>

## License

[MIT] © [Nicholas Berlette]

[mit]: https://mit-license.org/
[nicholas berlette]: https://github.com/nberlette
[code of conduct]: https://github.com/nberlette/.github/blob/main/.github/code_of_conduct.md
[open an issue]: https://github.com/nberlette/reducebatch/issues/new
