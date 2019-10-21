import Vue from 'vue'
import App from './routers/App.vue'
import {Header} from 'mint-ui'//按需导入 export default xx     按需导出暴露export var Header={}
import 'mint-ui/lib/style.min.css'//header css
import './lib/mui-master/dist/css/mui.min.css'
//注册组件 
Vue.component(Header.name,Header)
var vm = new Vue({
	el:'#app',
	render:c=>c(App)
})