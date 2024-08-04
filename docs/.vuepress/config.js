module.exports = {
    lang: 'zh-CN',
    title: 'EasyTiktok',
    base: '/tiktok-wiki/',
    themeConfig: {
        lastUpdated: '上次更新',
        repo: 'https://gitee.com/apiadmin/tiktok',
        repoLabel: '查看源码',

        docsDir: 'docs',
        docsBranch: 'master',
        editLink: true,
        docsRepo: 'https://gitee.com/apiadmin/tiktok-wiki',

        editLinkText: '在 Gitee 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',

        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',

        sidebar: [
            {
                text: '开始使用',
                children: [
                    '/start/overview.md',
                    '/start/install.md'
                ]
            },
            {
                text: '开放平台',
                children: [
                    '/open/index.md',
                    '/open/config.md',
                    '/open/fans.md',
                    '/open/userData.md',
                    '/open/video.md',
                    '/open/videoData.md'
                ]
            },
            {
                text: '小程序',
                children: [
                    '/miniProgram/index.md',
                    '/miniProgram/config.md',
                    '/miniProgram/auth.md',
                    '/miniProgram/qrcode.md',
                    '/miniProgram/server.md'
                ]
            },
        ]
    },
    plugins: []
}