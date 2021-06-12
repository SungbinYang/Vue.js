<template>
  <h1 @click="changeMessage">
    {{ msg }}
  </h1>
  <h1>{{ reversedMessage }}</h1>
</template>

<script>
export default {
  data() {
    return {
      // Getter, Setter 둘다 사용 가능
      msg: 'Hello?'
    }
  },
  computed: {
    reversedMessage() {
      return this.msg.split('').reverse().join(''); // Getter
    }
  },
  watch: { // 원본의 데이터뿐만 아니라 computed된 데이터도 감시를 할수 있다. 또한 this를 사용하지 않고 매개변수로 값을 받을수도 있다.
    msg(newValue) {
      console.log('msg: ', newValue); // Good!
    },
    reversedMessage(newValue) {
      console.log('reversedMessage: ', newValue);
    }
  },
  methods: {
    changeMessage() {
      this.msg = 'Good!';
    }
  }
}
</script>