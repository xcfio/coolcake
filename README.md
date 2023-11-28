# CoolCake

A simple package that monitor server running time

## Installation

To install CoolCake, run one of the following commands based on your preferred package manager:

#### NPM

```sh
npm install coolcake
```

#### PNPM

```sh
pnpm add coolcake
```

#### Yarn

```sh
yarn add coolcake
```

## Uses

#### For ESM

```js
import { uptime, UptimeFormat } from "coolcake"
setTimeout(() => {
    console.log(uptime()) // return 1 second 2 milliseconds
    console.log(uptime(UptimeFormat.Long)) // return 1 second 2 milliseconds
    console.log(uptime(UptimeFormat.Short)) //return 1s 2ms
}, 1200)
```

#### For CommonJS

```js
const { uptime, UptimeFormat } = require("coolcake")
setTimeout(() => {
    console.log(uptime()) // return 1 second 2 milliseconds
    console.log(uptime(UptimeFormat.Long)) // return 1 second 2 milliseconds
    console.log(uptime(UptimeFormat.Short)) //return 1s 2ms
}, 1200)
```
