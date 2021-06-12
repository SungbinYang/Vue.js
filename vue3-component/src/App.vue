<template>
  <button @click="message = 'Good?'">
    Click!
  </button>
  <h1>App: {{ message }}</h1>
  <Parent />
</template>

<script>
import Parent from '~/components/Parent';
import { computed } from 'vue';

export default {
  components: {
    Parent
  },
  data() {
    return {
      message: 'Hello World!'
    }
  },
  provide() {
    return {
      msg: computed(() => this.message)
    }
  }
}
</script>