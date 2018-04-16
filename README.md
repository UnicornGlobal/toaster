# vue-toaster

[![Build Status](https://travis-ci.com/darrynten/vue-toaster.svg?token=2azvxgpyzAkLb1UEKNft&branch=dev)](https://travis-ci.com/darrynten/vue-toaster)
[![codecov](https://codecov.io/gh/darrynten/vue-toaster/branch/dev/graph/badge.svg?token=gkxihPWHlk)](https://codecov.io/gh/darrynten/vue-toaster)

> A toaster that makes toast

## Installation

```
npm install --save vue-toaster
```

## Setup

In your `main.js` file,

```
import { ToasterEvents } from 'vue-toaster'
```

Add the toaster events to your vue instance as shown below:

```
Vue.prototype.$toaster = ToasterEvents
```
## Usage

Import the `Toaster` component in your App.vue and configure it using the example below

`App.vue`

```
<template>
  <div id="app">
    <toaster></toaster>
    <div><img src="./assets/logo.png"></div>
    <HelloWorld/>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import { Toaster } from 'vue-toaster

  export default {
    name: 'App',
    components: {
      Toaster,
      HelloWorld
    }
  }
</script>
```

### Basic

The Toaster can be called anywhere in your app by doing `this.$toaster.addToast(options)`.
Here is an example.

`Test.vue`

```
<script>
  export default {
    name: 'Test',
    methods: {
      submit() {
        if (!this.name) {
          this.$toaster.addToast({
            type: 'error',
            title: 'Invalid Name',
            message: 'Please add a name'
          })
          return
        }
        ...
      }
    }
  }
</script>
```

This will display an error toast with the message to the user.

### Advanced

You can configure the timeout of the toast by adding a `timeOut` property
E.g.

```
  this.$toaster.addToast({
    type: 'info',
    title: 'Secret Key',
    message: 'Please configure your secret key in the security section of the     dashboard.',
    timeOut: 5000
  })
```

## Details

It displays a toast depending on the type specified in the toast options. It makes use of an `EventEmitter` behind the scene and it emits an event whenever the `addToast` method is called. The toast is then added to an array of toasts; gets displayed on the screen and removed from the araay after the timeout. The default `timeOut` of a toast is `3500` (3.5s) and it can be configure to be higher or lower.

# Roadmap

- [ ] - Enable users to configure toast colors

# Contributors

[Bamidele Daniel](https://github.com/humanityjs)
