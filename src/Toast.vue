<template>
  <div>
    <div class="line" :class="toast.type" :style="animationDuration"></div>
    <div :class="style">
      <div class="toast-check">
        <check v-if="toast.type === 'success'"></check>
        <info v-if="toast.type === 'info'"></info>
        <warning v-if="toast.type === 'warning'"></warning>
        <danger v-else-if="toast.type === 'error'"></danger>
      </div>
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
  $toast-info: rgb(210,236,241);
  $toast-warning: rgb(255,243,207);
  $toast-error: rgb(255, 43, 104);
  $toast-success: rgb(18, 229, 13);
  .line {
    height: 3px;
    animation: fade 3.5s linear;
  }

  .error {
    background-color: $toast-error;
  }

  .success {
    background-color: $toast-success;
  }

  .info {
    background-color: #0c5460;
  }

  .warning {
    background-color: #856404;
  }

  .flex-toast-success, .flex-toast-error, .flex-toast-warning, .flex-toast-info {
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

  .flex-toast-success {
    background-color: lighten($toast-success, 35%);

    .toast-header {
      color: $toast-success;
    }
  }

  .flex-toast-warning {
    background-color: $toast-warning;

    .toast-header {
      color: #856404;
    }
  }

  .flex-toast-info {
    background-color: $toast-info;

    .toast-header {
      color: #0c5460;
    }
  }

  .flex-toast-error {
    background-color: lighten($toast-error, 35%);

    .toast-header{
      color: $toast-error;
    }
  }

  @keyframes fade {
    0%   {width: 100%;}
    100% {width: 0%;}
  }
</style>

<script>
import Check from './check.svg'
import Danger from './danger.svg'
import Info from './info.svg'
import Warning from './warning.svg'

export default {
  name: 'toast',
  components: {
    Check,
    Danger,
    Warning,
    Info
  },
  props: ['toast'],
  computed: {
    style() {
      return `flex-toast-${this.toast.type}`
    },
    animationDuration() {
      if (this.toast.timeOut) {
        const timer = parseInt(this.toast.timeOut, 10) / 1000
        return `animation-duration: ${timer}s`
      }

      return ''
    }
  }
}
</script>