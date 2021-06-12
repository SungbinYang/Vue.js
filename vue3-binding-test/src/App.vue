<template>
  <h1>{{ msg }}</h1>
  <input
    type="text"
    v-model.trim="msg" />
</template>

<script>
export default {
  data() {
    return {
      msg: 'HelloWorld'
    }
  },
  watch: { // 변화된 내용 감지
    msg() {
      console.log(this.msg);
    }
  }
}
</script>