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
Vue.use(plugin)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        message: 'hi'
    },
    created() {

    },
    methods: {
        showToast() {
            this.$toast(`我是第${parseInt(Math.random() * 100)}个弹出框`, {
                position: 'top',
                enableHtml: false,
                closeButton: {
                    text: '弹出',
                    callback() {
                        console.log('已经弹出')
                    }
                },
                autoClose: false,
                autoCloseDelay: 3
            })
        }
    }
})