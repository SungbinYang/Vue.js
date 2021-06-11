<template>
  <button @click="add">
    Add
  </button>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
</template>

<script>
export default {
  data() {
    return {
      // Getter, Setter 둘다 사용 가능
      msg: 'Hello Computed!'
    }
  },
  computed: { // 캐싱 기능이 있어서 반복할 필요가 없음 성능 최적화
    // Getter로만 사용
    // reversedMessage() {
    //   return this.msg.split('').reverse().join('');
    // }

    // Getter, Setter로 재정의
    reversedMessage: {
      get() {
        return this.msg.split('').reverse().join('');
      },
      set(value) {
        // this.msg = value;
        console.log(value);
      }
    }
  },
  methods: { // 호출될때마다 불려져서 성능이 안 좋음
    add() {
      this.reversedMessage += '!?';
      // this.msg += '!?';
    }
  }
}
</script>