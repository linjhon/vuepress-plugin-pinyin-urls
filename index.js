var tinyPinyin = require("tiny-pinyin");

function format(str) {
  if (str) {
    return str.toLowerCase();
  }
  return "";
}

function toPinyin(fileName) {
  var pinyin = "";
  var tokens = tinyPinyin.parse(fileName);

  var lastToken;
  tokens.forEach(function(v, i) {
    if (v.type === 2) {
      pinyin +=
        pinyin && !/\n|\s/.test(lastToken.target)
          ? " " + format(v.target)
          : format(v.target);
    } else {
      pinyin += (lastToken && lastToken.type === 2 ? " " : "") + v.target;
    }
    lastToken = v;
  });

  return pinyin;
}

var PinyinUrlsPlugin = {
  name: "vuepress-plugin-pinyin-urls",
  extendPageData(page) {
    page.stripFilename = function(fileName) {
      return toPinyin(fileName);
    };
  },
};

module.exports = PinyinUrlsPlugin;
