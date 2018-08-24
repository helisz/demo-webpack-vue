import Vue from 'vue'
import App from './app.vue'

import './assets/sass/global.scss'
import './assets/sass/header.scss'
import './assets/sass/footer.scss'

const root = document.createElement('div')
document.body.appendChild(root)

// 新建 Vue 对象
new Vue({
    render: (h)  => h(App)
    //h 参数: create App
}).$mount(root)