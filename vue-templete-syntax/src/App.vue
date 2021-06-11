<template>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello Computed!'
    }
  },
  computed: { // 캐싱 기능이 있어서 반복할 필요가 없음 성능 최적화
    reversedMessage() {
      return this.msg.split('').reverse().join('');
    }
  },
  methods: { // 호출될때마다 불려져서 성능이 안 좋음
    reverseMessage() {
      return this.msg.split('').reverse().join('');
    }
  }
}
</script>