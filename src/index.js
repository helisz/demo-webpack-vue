// 引用 vue 类库
import Vue from 'vue'
// App 来自 vue主文件
import App from './app.vue'

import './assets/styles/test.css'
import './assets/sass/test.scss'
import './assets/images/boy.png'

const root = document.createElement('div')
document.body.appendChild(root)

// 新建 Vue 对象
new Vue({
    render: (h)  => h(App)
    //h 参数: create App
}).$mount(root)