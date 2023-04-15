<script lang="ts">
import { onBeforeMount, onMounted, onBeforeUpdate , onUpdated, onBeforeUnmount, onUnmounted, ref} from 'vue'
export default ({
  name: 'LifeCycle',
  components: {},
  setup() {
    const text: globalThis.Ref<string> = ref('')

    onBeforeMount(() => {
      console.log("on before mount")
    })

    onMounted(() => {
      console.log("on mount")
    })

    onBeforeUpdate(() => {
      console.log("on before update", text.value)
    })

    onUpdated(() => {
      console.log("on update", text.value)
    })

    onBeforeUnmount(() => {
      console.log("on before unmounted")
    })

    onUnmounted(() => {
      console.log("on unmounted")
    })

    console.log("on created")

    return {
      text
    }
  }
})
</script>
<template>
 <div>
  <div>life cycle test!!!</div>
  <input type="text" v-model="text" placeholder="input test" />
  <div>{{ text }}</div>
 </div>
</template>
