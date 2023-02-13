/*
 * @Author: HxB
 * @Date: 2023-02-13 13:42:01
 * @LastEditors: DoubleAm
 * @LastEditTime: 2023-02-14 16:56:58
 * @Description: 配置文件
 * @FilePath: \web_docs\config\config.js
 */
window.$docsify = {
  // https://docsify.js.org/#/zh-cn/configuration
  el: '#bio-main',
  basePath: '/bio/',
  name: '前端文档生成模板 Bio',
  // logo: './favicon.png',
  nameLink: '/',
  loadSidebar: './layout/_sidebar.md',
  loadNavbar: './layout/_navbar.md',
  coverpage: './layout/_coverpage.md',
  alias: {
    '/.*/_sidebar.md': './layout/_sidebar.md',
    '/.*/_navbar.md': './layout/_navbar.md',
    '/.*/_coverpage.md': './layout/_coverpage.md'
  },
  notFoundPage: './404.md',
  mergeNavbar: true,
  autoHeader: false,
  onlyCover: true,
  subMaxLevel: 5,
  maxLevel: 5,
  repo: 'https://github.com/pandaoh/bio-docsify',
  auto2top: true,
  search: {
    maxAge: 86400000,
    paths: 'auto',
    placeholder: 'Search',
    noData: 'No Results!',
    depth: 5,
    hideOtherSidebarContent: false,
    namespace: 'bio'
  },
  tabs: {
    persist: true,
    sync: false,
    theme: 'classic' // material
  },
  plugins: [
    EditOnGithubPlugin.create(
      'https://github.com/pandaoh/bio-docsify/tree/master/bio/',
      null,
      "<span id='edit-btn'>Edit Online</span>"
    )
  ]
};
