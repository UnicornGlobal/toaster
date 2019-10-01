import Toaster from './Toaster.vue'
import ToasterEvents from './ToasterEvents.js'

import Check from './check.svg'
import Danger from './danger.svg'
import Info from './info.svg'
import Warning from './warning.svg'

Toaster.install = function(Vue, options = {}) {
  var timeout = 3500
  if (options.timeout) {
    timeout = options.timeout
  }

  Vue.prototype.$toaster = ToasterEvents
  Vue.prototype.$toaster.timeout = timeout
  Vue.prototype.$toaster.theme = {
    success: {
      light: '#d7eac1',
      dark: '#388E3C',
      icon: Check
    },
    error: {
      light: '#f0b8b8',
      dark: '#D32F2F',
      icon: Danger
    },
    warning: {
      light: '#ffe9aa',
      dark: '#FF9800',
      icon: Warning
    },
    info: {
      light: '#bfd7ff',
      dark: '#448AFF',
      icon: Info
    },
    width: '250px'
  }

  if (options.theme) {
    Vue.prototype.$toaster.theme = options.theme
  }

  if (options.iconSize) {
    Vue.prototype.$toaster.iconSize = options.iconSize
  }
}

export default Toaster
