# vuepress-plugin-pinyin-urls

vuepress plugin for pinyin urls


## 安装

```
npm i vuepress-plugin-pinyin-urls -S
```

## 使用

配置文件`.vuepress/config.js`

```js
module.exports = {
  plugins:[
    'pinyin-urls'
  ]
}
```

## 问题

如果你项目的 node 版本小于 13 ，会出现以下错误

```
Error: not support Intl or zh-CN language.
```

因为插件使用了 ![tiny-pinyin](https://github.com/creeperyang/pinyin) , 所以最好使用 `node v13+` 。

否则就需要安装 ![full-icu](https://www.npmjs.com/package/full-icu) 

```
npm install full-icu
```
或者全局安装

```
npm install -g full-icu
```