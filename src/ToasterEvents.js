import emitter from './emitter.js'

class ToasterEvents {
  static addToast(toast) {
    emitter.emit('addToast', toast)
  }
}

export default ToasterEvents