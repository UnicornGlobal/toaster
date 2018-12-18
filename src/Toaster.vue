<template>
  <div class="toast" v-if="toasts.length > 0">
    <div class="each" v-for="(toast, key, index) in toasts" :key="index">
     <toast :toast="toast"></toast>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .each {
    margin-bottom: 10px;
  }

  .toast {
    z-index: 99999;
    position: absolute;
    right: 10px;
    top: 70px;
    min-width: 250px;
    border-radius: 5px;
  }

  .active {
    display: block;
  }

  .inactive {
    display: none;
  }
</style>

<script>
import Toast from './Toast.vue'
import emitter from './emitter.js'

export default {
  components: {
    Toast
  },
  name: 'toaster',
  data() {
    return {
      toasts: [],
      toastTimeout: 3500
    }
  },
  mounted() {
    emitter.on('addToast', this.addToast)
  },
  beforeDestroy() {
    emitter.removeListener('addToast', this.addToast)
  },
  methods: {
    addToast(toastData) {
      toastData.id = Math.ceil(Math.random() * 10000)
      const timeout = toastData.timeOut || this.toastTimeout
      this.toasts.push(toastData)
      setTimeout(() => {
        this.closeToast(toastData.id)
      }, timeout)
    },
    closeToast(toastId) {
      const newToasts = this.toasts.filter(toast => toast.id !== toastId)
      this.toasts = newToasts
    }
  }
}
</script>
