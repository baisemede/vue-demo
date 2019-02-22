module.exports = {
    title: '轱辘UI',
    description: '轱辘 UI 是一个好用的 UI 框架',
    themeConfig:{
        nav:[
            {text:'主页',link:'/'},
            {text:'文档',link:'/guide/'},
            {text:'交流',link:'https://google.com'}
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
                       
                    ]
                },
     ]
    }
}