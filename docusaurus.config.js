const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

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
                src: 'img/logo.png',
            },
            items: [
                {
                    href: '/',
                    label: '主页'
                },
                {
                    type: 'dropdown',
                    label: '其他内容',
                    items: [
                        {
                            href: 'https://blog.lixiangyu.xyz',
                            label: '个人博客'
                        }
                    ]
                },
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
                    title: '其他内容',
                    items: [
                        {
                            label: '个人博客',
                            href: 'https://blog.lixiangyu.xyz',
                        }
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Xiangyu Li. Built with Docusaurus.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
            additionalLanguages: ['java'],
        },
        zoomSelector: '.markdown :not(em) > img'
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    path: 'source',
                    showLastUpdateTime: true,
                    remarkPlugins: [math],
                    rehypePlugins: [katex],
                    routeBasePath: '/'
                },
                blog: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    stylesheets: [
        {
            href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
            integrity: "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
            crossorigin: "anonymous",
        },
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
        ],
        'plugin-image-zoom'
    ],
    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans'],
    }
};
