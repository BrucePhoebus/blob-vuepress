module.exports = {
    title: 'Phoebus的博客',
    description: '每天学点新东西',
    head: [
        ['link', {rel: 'icon', href: '/img/logo.ico'}],
        ['link', {rel: 'manifest', href: '/manifest.json'}],
    ],
    themeConfig: {
        docsDir: 'docs',
        repoLabel: '查看源码',
        nav: [
            {
                text: '主页', link: '/',
            },
            {
                text: '博文',
                items: [
                    {text: 'Web', link: '/web/'}
                ]
            },
            {text: '关于', link: '/项目笔记/'},
            {text: 'Github', link: 'https://github.com/BrucePhoebus'},
        ],
        sidebar: {
            '/项目笔记/': [
                '',
                '使用VuePress搭建自己的私人博客',
            ],
            '/web/': [
                '',
                '什么是web'
            ],
        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
    },
}
