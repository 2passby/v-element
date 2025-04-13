module.exports = {
  plugins: [
    //需要四个插件实现css的变量循环等功能
    require('postcss-nested'),
    require('postcss-each'),
    // 确保安装了必要的 PostCSS 插件
    require('postcss-preset-env')({
      browsers: ['last 2 versions', '> 1%', 'not dead'],
    }),
    require('autoprefixer')({
      overrideBrowserslist: ['last 2 versions', '> 1%', 'not dead'],
    }),
  ],
}
