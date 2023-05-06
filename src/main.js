import { createApp } from 'vue'
import App from './App.vue'
import Router from '@/router'
import { ElMessage } from 'element-plus'
const app = createApp(App)
app.config.globalProperties.$message = ElMessage
app.component(ElMessage.name, ElMessage)
app.use(Router).mount('#app')
