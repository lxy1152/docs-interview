const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {
    title: '面试知识点整理',
    tagline: '',
    url: 'https://interview.docs.lixiangyu.xyz',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'lxy1152/docs-interview',
    projectName: 'docs-interview',
    themeConfig: {
        navbar: {
            title: '面试知识点整理',
            logo: {
                alt: 'logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    href: 'https://github.com/lxy1152/docs-interview',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/docusaurus',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/docusaurus',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
            additionalLanguages: ['java'],
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    path: 'source',
                    showLastUpdateTime: true
                },
                blog: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    plugins: [
        [
            "@easyops-cn/docusaurus-search-local",
            {
                hashed: true,
                language: ["en", "zh"],
                translations: {
                    "search_placeholder": "请输入要搜索的内容",
                    "see_all_results": "查看所有结果",
                    "no_results": "找不到对应的结果",
                    "search_results_for": "根据关键词：\"{{ keyword }}\"进行查找",
                    "search_the_documentation": "查找文档",
                    "count_documents_found": "找到了{{ count }}篇文档",
                    "count_documents_found_plural": "找到了{{ count }}篇文档",
                    "no_documents_were_found": "找不对对应的文档"
                }
            },
        ]
    ],
    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans'],
    }
};
