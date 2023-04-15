<script lang="ts">
import { ref } from 'vue'
export default ({
  setup() {
    const isShow = ref(true)
    const toggleIsShow = () => {
      if (isShow.value) {
        isShow.value = false
      } else {
        isShow.value = true
      }
    }

    return {
      isShow,
      toggleIsShow
    }
  }
})
</script>
<template>
  <div>
    <life-cycle v-if="isShow" />
    <button @click="toggleIsShow">isShow</button>
  </div>
</template>
