<template>
  <MyBtn>Banana</MyBtn>
  <MyBtn :color="color">
    <span style="color: red;">Apple</span>
  </MyBtn>
  <MyBtn
    large
    color="royalblue">
    Cherry
  </MyBtn>
  <MyBtn>Orange</MyBtn>
  <button>Banana</button>
</template>

<script>
import MyBtn from '~/components/MyBtn'

export default {
  components: {
    MyBtn
  },
  data() {
    return {
      color: '#000'
    }
  }
}
</script>