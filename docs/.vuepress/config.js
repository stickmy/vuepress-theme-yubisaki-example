module.exports = {
	theme: 'yubisaki',
	base: "/",
  title: 'IO',
  description: 'vuepress theme Yubisaki',
  head: [['link', { rel: 'icon', href: `/favicon.ico` }]],
  port: 3000,
  // Google Analytics ID
  ga: 'your ga id',
  serviceWorker: true,
  evergreen: true,
  markdown: {
    anchor: { permalink: true },
    toc: { includeLevel: [1, 2] }
  },
  plugins: [
    ['@vuepress/pwa', { serviceWorker: true, updatePopup: { message: 'New Posts', buttonText: 'Refresh' } }]
  ],
  themeConfig: {
    // background: `/static/background.jpg`,
    github: 'bloss',
    logo: '/favicon.ico',
    footer: 'Here are footer',
    perPagePosts: 10,
    date_format: 'yyyy-MM-dd',
    comment: {
      clientId: 'client id',
      clientSecret: 'secret id',
      repo: 'github repo',
      owner: 'your github id',
      locale: 'en',
      perPage: 5,
      distractionFreeMode: false
    },
    nav: [
      { text: 'HOME', link: '/' },
      { text: 'TAGS', link: '/tag/' },
      { text: 'GITHUB', link: 'https://github.com/bloss' },
      { text: 'ABOUT', link: '/about/' }
    ]
  }
};