<template>
  <div @input="inputHandler" @change="changeHandler">
    <input type="text" v-model="testId">
  </div>
</template>

<script>
export default {
  data() {
    return {
      testId: null
    }
  },
  methods: {
    inputHandler() {},
    changeHandler() {},
  }
}
</script>
