# npm-package-template

随着前端项目的增多，一旦设计团队统一了UI风格，则要为多个前端项目替换一些旧的组件，所以需要一个统一的 npm 私有库来管理这些组件，提升开发效率

这是一个 npm 包的通用模版，用于发布 React 组件到公司的 npm 私有库

## 目录结构
项目目录结构如下
```
project
|
| README.md
| package.json // 依赖包的版本控制以及需要发布的组件的一些配置
| package-lock.json
| .eslintrc.js
| index.html
| -- config // 配置webpack
|    | webpack.config.dev.js
|    | webpack.config.pro.js
| -- lib
|    | index.js // 经过webpack打包之后的js文件，也是最终需要提交到npm库的文件
| -- src
|    | index.js // 组件的js源文件
|    | index.scss // 组件的scss源文件
|    | main.js // 本地查看组件demo
|

```

其中npm包的一些基本信息配置在 `package.json` 文件中
```json
{
  "name": "loading", // 组件名 注意⚠️: npm私有库组件命名不支持中划线( - )
  "version": "1.0.0", // 版本
  "main": "lib/index.js", // 组件打包后的文件位置
  "author": "Haile",
  "license": "MIT",
}
```

## 安装
```
git clone git@github.com:HaileHuang/npm-package-template.git
cd npm-package-template
npm install
```
## 组件开发调试
模板项目展示的是一个 loading 组件, 请在开发的时候直接修改 index.js 和 index.scss 中的代码
```
// 执行
npm start
// 访问即可查看组件效果
http://0.0.0.0:5000/
```

## 组件发布
`npm run build` 打包组件，修改README文件，将组件的功能用法描述清楚，最后 npm 发布的文件为
- `package.json` // 组件信息及相关依赖
- `README.md` // 组件功能描述
- `lib/index.js` // 组件代码

相关命令如下
```
// 使用 npm build 打包组件
npm run build

// 设置发布者的身份
npm adduser --registry  http://your_private_npm_address

// 发布组件到npm私有库
npm publish --registry http://your_private_npm_address
```
##  其他项目如何用私有组件
1. 在其他项目的 package.json 里添加私有组件的名字
2. 修改其他项目的 registry 为私有库
```
npm set registry http://your_private_npm_address
```
将npm源设置为私有库镜像，通过 `npm install` 安装项目依赖包时，如果私有库中没有所需要的依赖包，则会到 npm 官方服务中拉取
