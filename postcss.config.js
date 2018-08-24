// postcss 用于优化已经生成了的css代码
// autoprefixer 用于增加游览器加前缀的配置
const autoprefixer = require('autoprefixer')

module.exports = {
    plugins: [
        autoprefixer()
    ]
}