module.exports = {
  base: '/front-end-learning',
  title: '前端学习指南',
  description: '前端学习指南',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: 'http://arthas.com.cn' }
    ],
    sidebar: [
      {
        title: '测试',
        collapsable: false,
        children: [
          ['/test/', '测试，index文件必须有'],
          ['/test/test2', '测试文件2']
        ]
      },
      {
        title: 'HTML',
        collapsable: false,
        children: [
          ['/html/', 'introduction'],
          ['/html/element', '元素']
        ]
      }
    ]
  }
}