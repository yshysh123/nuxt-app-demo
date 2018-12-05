import Vue from 'vue'
import { Message } from 'element-ui'
import Element from 'element-ui/lib/element-ui.common'
import locale from 'element-ui/lib/locale/lang/en'

Vue.prototype.$message = Message

export default () => {
  Vue.use(Element, { locale })
}
