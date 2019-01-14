<template>
  <div>
    <div class="line" :class="toast.type" :style="lineStyle"></div>
    <div :class="flex" :style="toastStyle">
      <component :is="toastIcon"></component>
      <div class="toast-main">
        <div class="toast-header">
          <span>{{toast.title}}</span>
        </div>
        <div class="toast-body">
          <span>{{toast.message}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .line {
    height: 3px;
    animation: fade 3.5s linear;
  }

  .flex-toast-success,
  .flex-toast-error,
  .flex-toast-warning,
  .flex-toast-info {
    padding: 10px 20px;
    display: flex;
    align-items: center;
    position: relative;

    svg {
      height: 30px;
      width: 30px;
      padding-right: 15px;
    }

    .toast-main {
      display: block;
      text-align: left;

      .toast-header {
        font-size: 18px;
        font-weight: 800;
        text-transform: uppercase;
      }
    }
  }

  @keyframes fade {
    0%   {width: 100%;}
    100% {width: 0%;}
  }
</style>

<script>
export default {
  props: {
    toast: {
      type: Object,
      required: true
    }
  },
  computed: {
    toastIcon() {
      if (this.toast.type === 'success') {
        return this.$toaster.theme.success.icon
      }
      if (this.toast.type === 'info') {
        return this.$toaster.theme.info.icon
      }
      if (this.toast.type === 'warning') {
        return this.$toaster.theme.warning.icon
      }

      return this.$toaster.theme.error.icon
    },
    flex() {
      return `flex-toast-${this.toast.type}`
    },
    toastStyle() {
      return `background: ${this.$toaster.theme[this.toast.type]['light']}; width: ${this.$toaster.theme.width};`
    },
    lineStyle() {
      let timer = parseInt(this.$toaster.timeout, 10) / 1000

      if (this.toast.timeout) {
        timer = parseInt(this.toast.timeout, 10) / 1000
      }

      return `animation-duration: ${timer}s; background: ${this.$toaster.theme[this.toast.type]['dark']}; width: ${this.$toaster.theme.width};`
    }
  }
}
</script>
