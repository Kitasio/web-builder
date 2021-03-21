<template>
  <div class="flex cursor-pointer w-6 mx-auto opacity-0 transition scale-90 duration-300 ease-in-out absolute top-5 z-10 transform hover:opacity-100 hover:scale-100">
    <img @click.self="active = !active" src="../assets/text.svg" alt="">
  <input v-if="active" v-model="text" @keyup.enter="$emit('text', text)" type="text">
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
   emits: ["text"],
   setup() {
       const text = ref('')
       const active = ref(false)

       return { text, active }
   }
}
</script>

<style>
.modal {
    transform: translate(-50%, -50%);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>