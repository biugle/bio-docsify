## 在目录中忽略 <!-- {docsify-ignore} -->

> 忽略所有 `<!-- {docsify-ignore-all} -->`

?> 这是一个 Docsify 使用教学

## 简介

> `Docsify` 是一个极简的文档生成工具；虽然 SEO 不够友好，但是相比于其他的文档工具，他更简洁、高效、方便；目前我们的使用场景只是内部阅读，没有其他特殊需求，因此 `Docsify` 是一个非常不错的选择，值得拥有！

* [官方文档](https://docsify.js.org/#/zh-cn/)

* [项目地址](https://github.com/docsifyjs)

## 使用

### 准备

* Node 环境
* MarkDown 语法
* 前端基础知识
* 独立解决一些小问题的能力
* 耐心

### 步骤

* **安装 docsify-cli 脚手架**

> `npm i docsify-cli -g`

* **新建一个空文件夹项目，用于初始化。**

> `docsify init ./web_docs`
> 运行后文件夹内会有如下文件：

1. `index.html` 入口文件
1. `README.md` 主页内容渲染
1. `.nojekyll` 用于阻止 GitHub Pages 忽略掉下划线开头的文件

* **启动本地服务预览**

> `docsify serve`
> 若预览失败，可以替换 cdn 为 `//unpkg.com/`。

## 其他

* **封面：`_coverpage.md` (需先开启 `coverpage: true`)**
* **首页：`Readme.md`**
* **多页文档可以新建目录，比如：`git/rules.md`。**
* **增加页面后需要配置侧边栏，方便访问。`_sidebar.md` (需先开启 `loadSidebar: true`)**
* **更换主题只需替换 css 文件即可**
* **全文搜索、字数统计、登录、上/下一页、黑暗模式与高亮**
  * [参考文档](https://docsify.js.org/#/zh-cn/plugins)