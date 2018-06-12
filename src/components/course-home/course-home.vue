<template>
  <div>
    <button @click="enterClass">进入课堂</button>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    enterClass() {
      this.$router.push('/detail/home')
    }
  }
}
</script>

