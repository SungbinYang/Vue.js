<template>
  <h1>{{ msg }}</h1>
  <input
    type="text"
    :value="msg"
    @input="msg = $event.target.value" /> <!-- 한글 입력시 단방향 입력 바인딩으로 해야함 v-model을 쓸 시에 1박자 늦음 -->
  <h1>{{ checked }}</h1>
  <input
    type="checkbox"
    v-model="checked" />
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello World!',
      checked: false
    }
  }
}
</script>