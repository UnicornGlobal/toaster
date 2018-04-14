<template>
  <div :class="style">
    <div class="check">
      <check v-if="toast.type === 'success'"></check>
      <danger v-else-if="toast.type === 'error'"></danger>
    </div>
    <div>
      <div class="header">
        <span>{{toast.title}}</span>
      </div>
      <div class="body">
        <span>{{toast.message}}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  $tabbs-pink: rgb(255, 43, 104);
  $tabbs-green: rgb(18, 229, 13);
  .flex-success, .flex-error {
    padding: 10px 20px;
    display: flex;
    align-items: center;
    position: relative;

    .check {
      display: flex;
      align-items: center;
      padding-right: 15px;

      svg {
        height: 30px;
        width: 30px;
      }
    }

    .header {
      font-size: 18px;
      font-weight: 800;
      text-transform: uppercase;
    }
  }

  .flex-success {
    background-color: lighten($tabbs-green, 35%);

    .header{
      color: $tabbs-green;
    }
  }

  .flex-error {
    background-color: lighten($tabbs-pink, 35%);

    .header{
      color: $tabbs-pink;
    }
  }

  .active {
    display: block;
  }

  .inactive {
    display: none;
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
      return `flex-${this.toast.type}`
    }
  }
}
</script>

