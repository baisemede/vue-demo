module.exports = {
    base:'/vue-demo/',
    title: 'MOMO-UI',
    description: '一个好用的 UI 框架',
    themeConfig:{
        nav:[
            {text:'主页',link:'/'},
            {text:'文档',link:'/introduce/'},
            {text:'Github',link:'https://github.com/baisemede/vue-demo'}
        ],
        sidebar: [{
                    title: '入门',
                    collapsable: true,
                    children: [
                        '/install/',
                        '/get-started/',
                    ]
                },
                {
                    title: '组件',
                    collapsable: true,
                    children: [
                        '/components/button',
                        '/components/input',
                        '/components/grid',
                        '/components/popover',
                        '/components/toast',
                        '/components/tabs',
                        '/components/layout',
                        '/components/collapse',
                    ]
                },
     ]
    }
}