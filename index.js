var tinyPinyin = require("tiny-pinyin");
var path = require("path");
var slugify = require("@vuepress/shared-utils").slugify;

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

  return pinyin.trim();
}

function isChinese(str) {
  return new RegExp("[\\u4E00-\\u9FFF]", "g").test(str);
}

var PinyinUrlsPlugin = {
  name: "vuepress-plugin-pinyin-urls",
  extendPageData(page) {
    if (!page.relativePath) return;
    if (!isChinese(page.relativePath)) return;

    if (
      page._permalink ||
      page._permalinkPattern ||
      page.frontmatter.permalink
    ) {
      page.stripFilename = function(fileName) {
        return toPinyin(fileName);
      };
    } else {
      var pathObject = path.parse(decodeURI(page.regularPath));
      var pathDir =
        pathObject.dir == "/" ? pathObject.dir : pathObject.dir + "/";
      page.path = pathDir + slugify(toPinyin(pathObject.name)) + pathObject.ext;
    }
  },
};

module.exports = PinyinUrlsPlugin;
