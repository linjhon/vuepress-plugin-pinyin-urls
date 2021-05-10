# vuepress-plugin-pinyin-urls

[![npm version](https://img.shields.io/npm/v/vuepress-plugin-pinyin-urls.svg)](https://www.npmjs.com/package/vuepress-plugin-pinyin-urls)
[![npm version](https://img.shields.io/github/workflow/status/linjhon/vuepress-plugin-pinyin-urls/npm-publish)](https://www.npmjs.com/package/vuepress-plugin-pinyin-urls)
[![npm](https://img.shields.io/npm/dw/vuepress-plugin-pinyin-urls)](https://www.npmjs.com/package/vuepress-plugin-pinyin-urls)
[![npm bundle size](https://img.shields.io/bundlephobia/min/vuepress-plugin-pinyin-urls)](https://www.npmjs.com/package/vuepress-plugin-pinyin-urls)
[![dependency status](https://img.shields.io/david/linjhon/vuepress-plugin-pinyin-urls.svg)](https://david-dm.org/linjhon/vuepress-plugin-pinyin-urls)
[![dev dependency status](https://img.shields.io/david/dev/linjhon/vuepress-plugin-pinyin-urls.svg)](https://david-dm.org/linjhon/vuepress-plugin-pinyin-urls#info=devDependencies)
[![ISC-licensed](https://img.shields.io/github/license/linjhon/vuepress-plugin-pinyin-urls.svg)](https://choosealicense.com/licenses/isc/)

vuepress plugin for pinyin urls

## 安装

```
npm i vuepress-plugin-pinyin-urls -S
```

## 使用

配置文件`.vuepress/config.js`

```js
module.exports = {
  plugins: ["pinyin-urls"],
};
```

tips：尽量将 `pinyin-urls` 放到最后以保证其生效

## 问题

如果你项目的 node 版本小于 13 ，会出现以下错误

```
Error: not support Intl or zh-CN language.
```

因为插件使用了 [tiny-pinyin](https://github.com/creeperyang/pinyin) , 所以最好使用 `node v13+` 。

否则就需要安装 [full-icu](https://www.npmjs.com/package/full-icu)

```sh
npm install full-icu
```

或者全局安装, 后续项目中安装依赖会自动保存到 `node_modules` 中。

```sh
npm install -g full-icu
```

然后还需要设置一次环境变量生效（只对当前终端生效）

```sh
# mac
export NODE_ICU_DATA=/node_modules/full-icu

# win
set NODE_ICU_DATA=/node_modules/full-icu
```
