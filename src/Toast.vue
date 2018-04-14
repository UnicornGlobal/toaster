<template>
  <div :class="style">
    <div class="toast-check">
      <check v-if="toast.type === 'success'"></check>
      <danger v-else-if="toast.type === 'error'"></danger>
    </div>
    <div>
      <div class="toast-header">
        <span>{{toast.title}}</span>
      </div>
      <div class="toast-body">
        <span>{{toast.message}}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  $toast-pink: rgb(255, 43, 104);
  $toast-green: rgb(18, 229, 13);
  .flex-toast-success, .flex-toast-error {
    padding: 10px 20px;
    display: flex;
    align-items: center;
    position: relative;

    .toast-check {
      display: flex;
      align-items: center;
      padding-right: 15px;

      svg {
        height: 30px;
        width: 30px;
      }
    }

    .toast-header {
      font-size: 18px;
      font-weight: 800;
      text-transform: uppercase;
    }
  }

  .flex-toast-success {
    background-color: lighten($toast-green, 35%);

    .toast-header {
      color: $toast-green;
    }
  }

  .flex-toast-error {
    background-color: lighten($toast-pink, 35%);

    .toast-header{
      color: $toast-pink;
    }
  }
</style>

<script>
import Check from './check.svg'
import Danger from './danger.svg'

export default {
  name: 'toast',
  components: {
    Check,
    Danger
  },
  props: ['toast'],
  computed: {
    style() {
      return `flex-toast-${this.toast.type}`
    }
  }
}
</script>