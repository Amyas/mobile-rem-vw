module.exports = {
  plugins: {
    "autoprefixer": {},
    "postcss-pxtorem": {
      "rootValue": 75, // 根元素字体大小 设计图/10  一般为750/10 = 75
      "unitPrecision": 5, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除：1.33333rem）
      "propList": [
        "*"
      ], // 可以从px更改为rem的属性 
         // 值必须完全匹配 使用通配符*开启所有属性 
         // *在单词的开头或结尾使用。（['*position*']会匹配background-position-y）
      "selectorBlackList": [], // 要忽略的选择器（保留为px，支持正则）
      "minPixelValue": 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
    }
  }
}
