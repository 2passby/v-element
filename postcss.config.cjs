module.exports = {
  plugins: [
    //需要四个插件实现css的变量循环等功能
    require('postcss-nested'),
    require('postcss-each'),
  ],
}
