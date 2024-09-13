# CoolCake

[![Discord](https://img.shields.io/discord/1211530334458617866?style=flat&logo=discord&logoColor=ffffff&color=5865f2)](https://discord.gg/FaCCaFM74Q)
[![GitHub Action](https://github.com/softwarexplus/coolcake/actions/workflows/test.yaml/badge.svg)](https://github.com/softwarexplus/coolcake/actions)
[![NPM Version](https://img.shields.io/npm/v/coolcake)](https://www.npmjs.com/package/coolcake)
[![NPM Downloads](https://img.shields.io/npm/dy/coolcake)](https://www.npmjs.com/package/coolcake)
[![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/coolcake)](https://www.npmjs.com/package/coolcake)
[![NPM License](https://img.shields.io/npm/l/coolcake)](https://github.com/softwarexplus/coolcake/blob/main/LICENSE)

A package for doing some utility things

## Installation

To install CoolCake, run one of the following commands based on your preferred package manager:

#### NPM

```console
npm install coolcake
```

#### PNPM

```console
pnpm add coolcake
```

#### Yarn

```console
yarn add coolcake
```

## Uses

```js
const { uptime } = require("coolcake")

setTimeout(() => {
    console.log(uptime()) // return 1s 2ms
    console.log(uptime(true)) // return 1 second 2 milliseconds
}, 1200)
```
