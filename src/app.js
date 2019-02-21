import Vue from 'vue';
import Button from './button';
import ButtonGroup from './button-group';
import Col from './col';
import Content from './content';
import Footer from './footer';
import Header from './header';
import Icon from './icon';
import Input from './input';
import Layout from './layout';
import Row from './row';
import Sider from './sider';
import Toast from './toast'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import CollapseItem from './collapse-item'
import Collapse from './collapse'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)
Vue.component('g-toast', Toast)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover',Popover)
Vue.component('g-collapse',Collapse)
Vue.component('g-collapse-item',CollapseItem)
Vue.use(plugin)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        message: 'hi',  
        selectedTab: 'sports'
        
    },
    created() {

    },
    methods: {
        showToast1() {
            this.showToast('top')
        },
        showToast2() {
            this.showToast('middle')
        },
        showToast3() {
            this.showToast('bottom')
        },

        showToast(position) {
            this.$toast(`我是第${parseInt(Math.random() * 100)}个弹出框`, {
                position,
                enableHtml: false,
                closeButton: {
                    text: '关闭',
                    callback() {
                        console.log('已经弹出')
                    }
                },
                autoClose: 3,
            })
        }
    }
})