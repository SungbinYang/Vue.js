<template>
  <h1>{{ count }}</h1>
</template>

<script>
export default {
  data() {
    return {
      count: 2
    }
  },
  beforeCreate() {
    console.log('Before Created', this.count); // undefined
  },
  created() {
    console.log('Created!', this.count); // 2
    console.log(document.querySelector('h1')); // null
  },
  beforeMount() {
    console.log('Before Mounted');
    console.log(document.querySelector('h1')); // null
  },
  mounted() {
    console.log('Mounted');
    console.log(document.querySelector('h1'));
  }
}
</script>